# Embark #

> A console and REST Proxies for managing multi-user Kafka clusters.

## Summary ##

Embark is both a Kafka UI, and a set of services to proxy requests to Kafka using authentication methods that are more 
common to web technology.

It exists mostly because we have a multi-user environment and we need them to play nicely with each other by setting
some boundaries. Developers had also requested a web UI to keep an eye on their topics and schemas.

## Architecture ##

Embark consists of a family of REST Proxy services (known in micronaut as a "Federation"), 
that talk [JSON-API](https://jsonapi.org/), and that are built with the [micronaut framework](https://micronaut.io/):

- **admin**, which handles AdminClient API functionality.
- **connect**, which proxies requests to Kafka Connect.
- **schemaregistry**, which proxies requests to Schema Registry.
- **ksql**, which proxies requests to KSQL server.

It also comes with a [frontend](frontend), built with Vue.js.

The reason that we proxy some services is to overlay more authorisation features, but their functionality does not change
in terms of which REST endpoints are available.

## Features ##

- Create, view, and delete Kafka Topics.
- View consumer groups and consumers.
- View schemas and schema versions.
- Perform basic KSQL queries.

**Planned**

- ACL manipulation via UI and API.
- Issuing of SSL certificates via UI that can be granted authorization rights to topics.
- Passthrough authentication of users via delegation token from the backend to the underlying kafka endpoint, so that
  Embark acts by proxy of the logged-in user.

## Installation ##

The primary supported method of deployment is via Docker (docker-compose), or some container cluster technology such as 
Kubernetes or OpenShift.

- **(TODO)** Helm Charts and OpenShift Template.

## Configuration ##

- The admin service uses [micronaut-kafka](https://micronaut-projects.github.io/micronaut-kafka/latest/guide/), so
  the configuration is the same. You can specify the bootstrap configuration like so:   

        kafka:
            bootstrap:
                servers: localhost:9092

  or you may supply the environment variable `KAFKA_BOOTSTRAP_SERVERS`.


As much as possible, the configuration properties match the existing micronaut addon packages.

This will make it easier to adopt micronaut packages in the future which cover common functionality such as Authentication.

- **(TODO)** Each service should have an application.example.yml file containing all possible configuration options that
    are not micronaut options. 

## Security Model ##

### Kafka Connect ###

The proxy service will maintain a mapping of Embark service principal to connector name.
Whenever a connector is created via the REST API, it will be associated with the current user.
This will be used to provide a filtered view of connectors.

### KSQL ###

In order to apply controls to KSQL it is necessary to parse the identifiers from the statements being executed.

If the current user is not allowed to SELECT (read) from a topic, the statement request will be rejected.

### Schema Registry ###



## Developer Stuff ##

### Run locally ###

To run each service locally you can use the Gradle wrapper along with the service name you want to run such as:

    $ ./gradlew admin:run
    $ ./gradlew connect:run
    
If you would like to run all services locally, just combine them and add the `--parallel` flag:

    $ ./gradlew admin:run connect:run ksql:run schemaregistry:run --parallel
    
### API Documentation ###

OpenAPI (Swagger) Annotations are processed by the `io.micronaut.configuration:micronaut-openapi` annotation processor.
This generates a .yml file in 

    build/classes/java/main/META-INF/swagger/service-name-1.0.yml

In order to generate the OpenAPI static HTML assets, you must run:

    $ ./gradlew generateSwaggerUI
    
### Notes for myself about GSSAPI ###

I tore all my hair out getting GSSAPI working between all the components. So here's a config dump for future me.
This was based on a Windows Server 2019 DC as the KDC.

Domain joining the machine made it even more mind numbing as the keytab password would get reset for the computer account.

In my case it was necessary to manually specify KRB5 REALMS, because the mac was doing something crazy with the local KDC.

Launch ZooKeeper as:

    KAFKA_OPTS="-Djava.security.auth.login.config=etc/kafka/zookeeper_jaas.conf -Djava.security.krb5.conf=etc/security/krb5.conf" bin/zookeeper-server-start etc/kafka/zookeeper.properties

Launch Broker as:

    sudo KAFKA_OPTS="-Djava.security.auth.login.config=etc/kafka/kafka_client_jaas.conf -Djava.security.krb5.conf=etc/security/krb5.conf" bin/kafka-server-start etc/kafka/server.properties

Command line tool example (kafka-acl):

    KAFKA_OPTS="-Djava.security.auth.login.config=etc/kafka/kafka_client_jaas.conf -Djava.security.krb5.conf=etc/security/krb5.conf" bin/kafka-acls --authorizer-properties zookeeper.connect=zookeeper:2181 --list

KSQL:

    KAFKA_OPTS="-Djava.security.auth.login.config=etc/ksql/ksql_jaas.conf -Djava.security.krb5.conf=etc/security/krb5.conf" bin/ksql-server-start
  
If you still have issues with kerberos, supply the JAAS debugging flag as:

    -Dsun.security.krb5.debug=true


*krb5.conf*:

    [domain_realms]
    myhostname.domain.com = DOMAIN.COM
    domain.com = DOMAIN.COM

*server.properties*

    listeners=PLAINTEXT://host.domain:9092,SASL_PLAINTEXT://host.domain:9093
    sasl.mechanism.inter.broker.protocol=GSSAPI
    security.inter.broker.protocol=SASL_PLAINTEXT
    sasl.enabled.mechanisms=GSSAPI
    #sasl.kerberos.service.name=kafka <- didnt help
    zookeeper.set.acl=true
    advertised.listeners=PLAINTEXT://host.domain:9092,SASL_PLAINTEXT://host.domain:9093

*kafka_jaas.conf*
    
    // ZooKeeper client authentication
    Client {
        com.sun.security.auth.module.Krb5LoginModule required
        useKeyTab=true
        keyTab="/path/to/kafka.ktab"
        storeKey=true
        principal="kafka/host.domain@DOMAIN"
        debug=true;
    };
    // Specifies a unique keytab and principal name for each broker
    KafkaServer {
        com.sun.security.auth.module.Krb5LoginModule required
        refreshKrb5Config=true
        useKeyTab=true
        storeKey=true
        keyTab="/path/to/kafka.ktab"
        serviceName="kafka"
        principal="kafka/host.domain@DOMAIN";
    };


*zookeeper.properties*

    authProvider.1=org.apache.zookeeper.server.auth.SASLAuthenticationProvider
    jaasLoginRenew=3600000
    requireClientAuthScheme=sasl


*zookeeper_jaas.conf*

    // Specifies a unique keytab and principal name for each ZooKeeper node
    Server {
        com.sun.security.auth.module.Krb5LoginModule required
        useKeyTab=true
        keyTab="/path/to/zookeeper.ktab"
        storeKey=true
        principal="zookeeper/host.domain@DOMAIN"
        debug=true;
    };

### See Also ###

- A great walkthrough of SASL ACLs https://github.com/shafiquejamal/kafka-zookeeper-kerberos/blob/master/README-Kafka-brokers-SASL-only.md
