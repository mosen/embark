package embark.api.admin.kafka.exceptionhandler;

//import io.micronaut.core.exceptions.ExceptionHandler;
import io.micronaut.context.annotation.Requires;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Produces;
import io.micronaut.http.server.exceptions.ExceptionHandler;
import org.apache.kafka.common.KafkaException;

import javax.inject.Singleton;

/**
 * Handles `KafkaException` which sometimes occurs when brokers cannot be found and kafka-clients.
 */
@Produces
@Singleton
@Requires(classes={KafkaException.class, ExceptionHandler.class})
public class KafkaExceptionHandler implements ExceptionHandler<KafkaException, HttpResponse<String>> {

  @Override
  public HttpResponse<String> handle(HttpRequest request, KafkaException exception) {
    return null;
  }
}
