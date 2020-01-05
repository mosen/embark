package com.github.mosen.security.saml2.routes;

import com.github.mosen.security.saml2.serviceprovider.SAML2ServiceProvider;
import com.onelogin.saml2.Auth;
import com.onelogin.saml2.authn.AuthnRequest;
import com.onelogin.saml2.authn.SamlResponse;
import com.onelogin.saml2.exception.Error;
import com.onelogin.saml2.servlet.ServletUtils;
import com.onelogin.saml2.settings.Saml2Settings;
import io.micronaut.context.annotation.Parameter;
import io.micronaut.context.event.ApplicationEventPublisher;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.*;
import io.micronaut.http.uri.UriBuilder;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.authentication.AuthenticationResponse;
import io.micronaut.security.handlers.LoginHandler;
import io.micronaut.security.handlers.RedirectingLoginHandler;
import io.micronaut.security.rules.SecurityRule;
import io.reactivex.Flowable;
import org.joda.time.DateTime;
import org.joda.time.Instant;
import org.reactivestreams.Publisher;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller("/saml")
@Secured(SecurityRule.IS_ANONYMOUS)
public class DefaultSamlController implements SamlController {

  private static final Logger LOG = LoggerFactory.getLogger(DefaultSamlController.class);

  private final SAML2ServiceProvider saml;
//  private final LoginHandler loginHandler;
  private final ApplicationEventPublisher eventPublisher;

  /**
   * @param saml The SAML 2.0 Bean
   * @param loginHandler The login handler
   * @param eventPublisher The event publisher
   */
  DefaultSamlController(SAML2ServiceProvider saml,
//                        RedirectingLoginHandler loginHandler,
                        ApplicationEventPublisher eventPublisher) {
    this.saml = saml;
//    this.loginHandler = loginHandler;
    this.eventPublisher = eventPublisher;
  }

  @Override
  public SAML2ServiceProvider getServiceProvider() {
    return this.saml;
  }

  public Publisher<HttpResponse> login(HttpRequest request) {
    return this.saml.authorizationRedirect(request);
  }

  public Publisher<HttpResponse> assertionConsumerService(@Body String SAMLResponse) {
    if (LOG.isTraceEnabled()) {
      LOG.trace("Received callback from saml2 provider [{}]", saml.getName());
    }
    Publisher<AuthenticationResponse> authenticationResponse = saml.onCallback(SAMLResponse);
//    return Flowable.fromPublisher(authenticationResponse).map(response -> {

//      if (response.isAuthenticated()) {
//        UserDetails userDetails = (UserDetails) response;
//        if (LOG.isTraceEnabled()) {
//          LOG.trace("Authentication succeeded. User [{}] is now logged in", userDetails.getUsername());
//        }
//        eventPublisher.publishEvent(new LoginSuccessfulEvent(userDetails));
//        return loginHandler.loginSuccess(userDetails, request);
//      } else {
//        AuthenticationFailed authenticationFailed = (AuthenticationFailed) response;
//        if (LOG.isTraceEnabled()) {
//          LOG.trace("Authentication failed: {}", authenticationFailed.getMessage().orElse("unknown reason"));
//        }
//        eventPublisher.publishEvent(new LoginFailedEvent(authenticationFailed));
//        return loginHandler.loginFailed(authenticationFailed);
//      }
//    }).defaultIfEmpty(HttpResponse.status(HttpStatus.UNAUTHORIZED));

    return Flowable.just(HttpResponse.status(HttpStatus.UNAUTHORIZED));
  }

  @Produces("text/xml")
  public Publisher<HttpResponse> metadata() {
    final Saml2Settings settings = this.saml.getSettings();

    try {
      String metadata = settings.getSPMetadata();
      return Flowable.just(HttpResponse.ok(metadata));
    } catch (Exception e) {
      return Flowable.just(HttpResponse.serverError(e.getMessage()));
    }
  }
}
