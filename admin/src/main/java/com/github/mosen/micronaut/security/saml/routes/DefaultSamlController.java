package com.github.mosen.micronaut.security.saml.routes;

import com.onelogin.saml2.Auth;
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
  public HttpResponse consumeAssertion(HttpRequest<Map<String, Object>> request) {
    return null;
  }
}
