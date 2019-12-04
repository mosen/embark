package embark.api.admin.kafka.exceptionhandler;

import io.micronaut.context.annotation.Requires;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Error;
import io.micronaut.http.annotation.Produces;
import io.micronaut.http.server.exceptions.ExceptionHandler;
import org.apache.kafka.common.errors.TopicExistsException;

import javax.inject.Singleton;

@Singleton
@Produces
@Requires(classes = {TopicExistsException.class, ExceptionHandler.class})
public class TopicExistsExceptionHandler implements ExceptionHandler<org.apache.kafka.common.errors.TopicExistsException, HttpResponse> {

  @Override
  public HttpResponse handle(HttpRequest request, TopicExistsException exception) {
    return HttpResponse.serverError("some error");
  }

}
