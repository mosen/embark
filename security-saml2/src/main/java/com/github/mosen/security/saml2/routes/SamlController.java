package com.github.mosen.security.saml2.routes;

import com.onelogin.saml2.Auth;
import io.micronaut.context.annotation.Executable;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Body;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.rules.SecurityRule;
import org.reactivestreams.Publisher;

/**
 * Responsible for SAML SP authorization redirect and assertion consumer service.
 *
 * @author Mosen
 */
@Secured(SecurityRule.IS_ANONYMOUS)
public interface SamlController {

  /**
   * @return The OneLogin SAML Auth instance associated with this controller.
   */
  Auth getAuth();

  /**
   * Performs an authorization redirect to SAML IdP using SAML URI/GET redirect binding
   *
   * @param request The current request
   * @return A redirecting http response
   */
  @Executable
  Publisher<HttpResponse> login(HttpRequest request);

  /**
   * Receive the SAML IdP Assertion (POST binding)
   *
   * @param SAMLResponse The SAML Response POST'ed back as form encoded data.
   * @return A response
   */
  @Executable
  Publisher<HttpResponse> assertionConsumerService(@Body String SAMLResponse);

  /**
   * Generate SAML SP Metadata
   *
   * @return A response
   */
  Publisher<HttpResponse> metadata();
}
