package main.java.com.github.mosen.micronaut.security.saml.routes;

import com.onelogin.saml2.Auth;
import com.onelogin.saml2.settings.Saml2Settings;
import io.micronaut.context.annotation.Parameter;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Controller;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.rules.SecurityRule;
import org.reactivestreams.Publisher;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

@Controller("/saml")
@Secured(SecurityRule.IS_ANONYMOUS)
public class DefaultSamlController implements SamlController {

  private static final Logger LOG = LoggerFactory.getLogger(DefaultSamlController.class);

  private final Auth auth;

  DefaultSamlController(@Parameter Auth auth) {
    LOG.info("DefaultSamlController()");
    this.auth = auth;
  }


  @Override
  public Auth getAuth() {
    return this.auth;
  }

  @Override
  public HttpResponse login(HttpRequest request) {
    try {
      auth.login();
      return HttpResponse.ok();
    } catch (Exception e) {
      return HttpResponse.serverError();
    }
  }

  @Override
  public HttpResponse assertionConsumerService(HttpRequest<Map<String, Object>> request) {

//    HttpResponse response;
//    try {
//      Auth auth = new Auth(request, response);
//      auth.processResponse();
//
//    } catch (Exception e) {
//      return HttpResponse.serverError();
//    }
//    if (!auth.isAuthenticated()) {
//      out.println("Not authenticated");
//    }
    return HttpResponse.ok();
  }

  @Override
  public HttpResponse<String> metadata() {
    final Saml2Settings settings = this.auth.getSettings();

    try {
      String metadata = settings.getSPMetadata();
      return HttpResponse.ok(metadata);
    } catch (Exception e) {
      return HttpResponse.serverError(e.getMessage());
    }
  }
}
