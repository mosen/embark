package embark.api.admin.kafka.exceptionhandler;

import io.micronaut.context.annotation.Requires;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Produces;
import io.micronaut.http.server.exceptions.ExceptionHandler;

import org.apache.kafka.common.errors.UnknownTopicOrPartitionException;

import javax.inject.Singleton;

/**
 * Return a 404 every time this exception is raised because it is usually raised in response to deleting or retrieving
 * a topic or partition that doesn't exist anymore.
 */
@Singleton
@Produces
@Requires(classes = {UnknownTopicOrPartitionException.class, ExceptionHandler.class})
public class UnknownTopicOrPartitionExceptionHandler implements ExceptionHandler<UnknownTopicOrPartitionException, HttpResponse> {

  @Override
  public HttpResponse handle(HttpRequest request, UnknownTopicOrPartitionException exception) {
    System.out.println("Handled UnknownTopicOrPartitionExceptionHandler");
    exception.printStackTrace();
    return HttpResponse.notFound();
  }

}
