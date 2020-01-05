package com.github.mosen.security.saml2.routes;

import com.github.mosen.security.saml2.serviceprovider.SAML2ServiceProvider;
import io.micronaut.context.annotation.Executable;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Body;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.rules.SecurityRule;
import org.reactivestreams.Publisher;

import java.util.Map;

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
  SAML2ServiceProvider getServiceProvider();

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
   * @param request The HTTP-POST bound SAML Assertion
   * @return A response
   */
  @Executable
  public Publisher<HttpResponse> assertionConsumerService(String SAMLResponse);

  /**
   * Generate SAML SP Metadata
   *
   * @return A response
   */
  Publisher<HttpResponse> metadata();
}
