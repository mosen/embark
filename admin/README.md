# embark-api-admin #

> A REST microservice for the Embark Kafka Console Project.

This microservice implements all of the functionality exposed by the kafka-clients AdminClient API.

## Maturity ##

This list tracks the roadmap, based on the features in the
[AdminClient](https://kafka.apache.org/20/javadoc/org/apache/kafka/clients/admin/AdminClient.html) API


## Configuration ##


Example:

    kafka:
      bootstrap:
        servers: localhost:9092
        ssl:
          keystore:
            location: /path/to/client.keystore.p12
            password: secret
          truststore:
            location: /path/to/client.truststore.jks
            password: secret
            type: PKCS12
        security:
          protocol: ssl

The configuration of this service mostly follows the configuration variables available to 
[micronaut-kafka](https://micronaut-projects.github.io/micronaut-kafka/latest/guide/) so that any Consumers/Producers
implemented in future don't create a duplicate config section.


## Building ##

### Runnable .jar ###

Just run:

    $ ./gradlew build
    
To create a runnable .jar file.

### API Documentation ###

OpenAPI (Swagger) Annotations are processed by the `io.micronaut.configuration:micronaut-openapi` annotation processor.
This generates a .yml file in 
[build/classes/java/main/META-INF/swagger/kafka-admin-api-1.0.yml](build/classes/java/main/META-INF/swagger)

In order to generate the OpenAPI static HTML assets, you must run:

    $ ./gradlew generateSwaggerUI

## Releasing ##

### Publishing to Nexus ###

First, you should set the properties **nexusUser** and **nexusPassword** in your `~/.gradle/gradle.properties` file.

Then, run the following to publish to Nexus:

    $ export GRADLE_USER_HOME=~/.gradle
    $ ./gradlew publish

## Notes ##


### Debugging Kerberos ###

I use the following options:

    KAFKA_OPTS="-Djava.security.krb5.conf=etc/security/krb5.conf -Dsun.security.krb5.debug=true -Djava.security.auth.login.config=etc/kafka/kafka_client_jaas.conf" \
        bin/kafka-server-start \
        etc/kafka/server.properties
        
Because i use macOS, the only way i have found to force Kafka to get a kerberos TGT in the right format is to supply
a krb5.conf like so:

    [libdefaults]
    default_realm = REALM.NAME
    
    [domain_realms]
    hostname.my.realm = REALM.NAME
    my.realm = REALM.NAME

Otherwise Kafka will not authenticate to Zookeeper because it cannot issue a TGT for krbtgt/hostname instead of the 
expected krbtgt/domain@domain




### Cruft ###

Issue SSL client certs valid for connection to topics using local CA (?)

Schema Registry multi-tenanted namespace separation?


Cache Node info - dont have to hit the kafka cluster very often as nodes dont change much

API auth: JWT or passthrough kafka SSL cert?

AdminClient vars

        bootstrap.servers = [localhost:9092]
        client.dns.lookup = default
        client.id =
        connections.max.idle.ms = 300000
        metadata.max.age.ms = 300000
        metric.reporters = []
        metrics.num.samples = 2
        metrics.recording.level = INFO
        metrics.sample.window.ms = 30000
        receive.buffer.bytes = 65536
        reconnect.backoff.max.ms = 1000
        reconnect.backoff.ms = 50
        request.timeout.ms = 120000
        retries = 5
        retry.backoff.ms = 100
        sasl.client.callback.handler.class = null
        sasl.jaas.config = null
        sasl.kerberos.kinit.cmd = /usr/bin/kinit
        sasl.kerberos.min.time.before.relogin = 60000
        sasl.kerberos.service.name = null
        sasl.kerberos.ticket.renew.jitter = 0.05
        sasl.kerberos.ticket.renew.window.factor = 0.8
        sasl.login.callback.handler.class = null
        sasl.login.class = null
        sasl.login.refresh.buffer.seconds = 300
        sasl.login.refresh.min.period.seconds = 60
        sasl.login.refresh.window.factor = 0.8
        sasl.login.refresh.window.jitter = 0.05
        sasl.mechanism = GSSAPI
        security.protocol = PLAINTEXT
        send.buffer.bytes = 131072
        ssl.cipher.suites = null
        ssl.enabled.protocols = [TLSv1.2, TLSv1.1, TLSv1]
        ssl.endpoint.identification.algorithm = https
        ssl.key.password = null
        ssl.keymanager.algorithm = SunX509
        ssl.keystore.location = null
        ssl.keystore.password = null
        ssl.keystore.type = JKS
        ssl.protocol = TLS
        ssl.provider = null
        ssl.secure.random.implementation = null
        ssl.trustmanager.algorithm = PKIX
        ssl.truststore.location = null
        ssl.truststore.password = null
        ssl.truststore.type = JKS
        

Consumer lag implementation: https://github.com/omarsmak/kafka-consumer-lag-monitoring
