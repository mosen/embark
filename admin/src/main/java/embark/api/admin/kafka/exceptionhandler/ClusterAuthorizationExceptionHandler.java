package embark.api.admin.kafka.exceptionhandler;

import io.micronaut.context.annotation.Requires;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Produces;

import io.micronaut.http.server.exceptions.ExceptionHandler;
import org.apache.kafka.common.errors.ClusterAuthorizationException;

import javax.inject.Singleton;

/**
 * Handle a ClusterAuthorization Exception which means that the API backend does not have enough permission or is using
 * the wrong transport to make a privileged operation.
 */
@Produces
@Singleton
@Requires(classes = {ClusterAuthorizationException.class, ExceptionHandler.class})
public class ClusterAuthorizationExceptionHandler implements ExceptionHandler<ClusterAuthorizationException, HttpResponse> {

  @Override
  public HttpResponse handle(HttpRequest request, ClusterAuthorizationException exception) {
    return HttpResponse.badRequest("bad thing");
  }

}
