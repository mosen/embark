package embark.api.admin.kafka.exceptionhandler;

import io.micronaut.context.annotation.Requires;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Produces;
import io.micronaut.http.server.exceptions.ExceptionHandler;
import org.apache.kafka.common.errors.TopicAuthorizationException;
import javax.inject.Singleton;

@Produces
@Singleton
@Requires(classes = {TopicAuthorizationException.class, ExceptionHandler.class})
public class TopicAuthorizationExceptionHandler implements ExceptionHandler<TopicAuthorizationException, HttpResponse> {

  @Override
  public HttpResponse handle(HttpRequest request, TopicAuthorizationException exception) {
    return HttpResponse.badRequest("bad thing");
  }
}
