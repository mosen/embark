# Embark #

> A console and REST Proxies for managing multi-user Kafka clusters.

## Summary ##

Embark is both a Kafka UI, and a set of services to proxy requests to Kafka using authentication methods that are more 
common to web technology.

It exists mostly because we have a multi-user environment and we need them to play nicely with each other by setting
some boundaries. Developers had also requested a web UI to keep an eye on their topics and schemas.

## Architecture ##

Embark consists of a family of services (known in micronaut as a "Federation"), 
that either proxy or act as an interface to API's 
and that are built with the [micronaut framework](https://micronaut.io/):

- **admin**, which handles AdminClient API functionality.
- **connect**, which will act as middleware for the Connect REST API to
  enforce RBAC and namespacing.
- **schemaregistry**, which will act as middleware for the Schema Registry
  API to enforce RBAC and namespacing.
- **ksql**, which will act as middleware for the KSQL server.

It also comes with a [frontend](frontend), built with Vue.js.

The reason we proxy some of the services is:

1. We need to apply an authorization model on top of what currently exists.
2. *MOST* confluent REST API's do not support CORS headers.

### CORS Concerns and Development ###

*SOME* services support CORS using the following properties:

    access.control.allow.origin=<embark url>
    # or really insecure:
    access.control.allow.origin=*
    
    access.control.allow.methods=GET,OPTIONS,HEAD,POST,PUT,DELETE # Defaults to GET,POST,HEAD

I got this to work for Schema Registry only, and it is documented for Connect.

The Kafka Connect change was [KAFKA-3424](https://github.com/apache/kafka/commit/eb823281a52f3b27c3a889e7412bc07b3024e688)
but the option seems to be useless.

*UPDATE*: The following works for Connect, but does not add the CORS headers until the client supplies an Origin header?

    access.control.allow.origin="*"
    rest.port=8083

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

The authoritative source is the example application config file [application.example.yml](application.example.yml).

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

## Security Model - Proposed Design ##

### Why not use the REST Proxy? ###

The REST Proxy supports authentication to the Kafka Cluster, but itself does not support any authentication unless
you use the Commercial [REST Proxy Security Plugin](). The Security plugin only supports SSL Client or Basic Auth
schemes, of which neither are used in this application.

It is against the design of this project because:

- This project should work with Apache Kafka (OSS), and
- This project should not introduce any cost barriers.

### Kafka Connect ###


### KSQL ###

KSQL Server can natively connect to a secured Kafka Cluster _as a single security principal_

To natively support a multi-user scenario, it seems you would require 
a KSQL server for each application to hold one credential for each
responsible party.

In order for us to avoid noisy neighbours, we need to simulate access to topics when KSQL is
POSTed to the KSQL server instance. This means:

- Analyzing the query for identifiers that could have ACLs applied.
- Making a relationship between the logged-in user and a security principal in Kafka.
- Retrieving and comparing ACLs against the associated principal for identifiers that are
  part of the query.

The current way forward is to try to inject a middleware between the KSQL Server
and the client to make authorization decisions, based upon a bearer token.

### Schema Registry ###

The Schema Registry has the best model of multi-user support via the commercially licensed
Schema Registry Security Plugin.

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
    
