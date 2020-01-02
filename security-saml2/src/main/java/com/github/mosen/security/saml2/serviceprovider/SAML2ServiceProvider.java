package com.github.mosen.security.saml2.serviceprovider;

import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.security.authentication.AuthenticationResponse;
import org.reactivestreams.Publisher;

import java.util.Map;

/**
 * This interface is exactly the same as OauthClient intentionally to maintain compatibility.
 */
public interface SAML2ServiceProvider {

  /**
   * @return The provider name
   */
  String getName();

  /**
   * Authenticate with IdP using SAML Redirect binding
   *
   * @param originating The originating request
   * @return A response publisher
   */
  Publisher<HttpResponse> authorizationRedirect(HttpRequest originating);

  /**
   * Responsible for receiving the authorization callback request and returning
   * an authentication response.
   *
   * @param request The callback request
   * @return The authentication response
   */
  Publisher<AuthenticationResponse> onCallback(HttpRequest<Map<String, Object>> request);
}
