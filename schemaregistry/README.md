# embark-api-schemaregistry #

> A REST microservice for the Kafka Schema Registry REST API

## Configuration ##

Example:

    kafka:
      registry:
        url: http://localhost:8082/
    
*NOTE*: all micronaut HTTP Client configuration applies to the Schema Registry Client.
For a complete reference, see: 
[DefaultHttpClientConfiguration](https://docs.micronaut.io/latest/guide/configurationreference.html#io.micronaut.http.client.DefaultHttpClientConfiguration)

## Running locally ##

To run locally you must have [Gradle](https://gradle.org/) installed. You can then run:

    $ ./gradlew run
    
_OR_, on Windows:

    gradlew.bat run
    
## Testing ##

This service is tested using [micronaut-test](https://micronaut-projects.github.io/micronaut-test/latest/guide/index.html) 
and [JUnit5](https://junit.org/junit5/).

To run the tests you can simply execute:

    $ ./gradlew test
    
At the command line.


