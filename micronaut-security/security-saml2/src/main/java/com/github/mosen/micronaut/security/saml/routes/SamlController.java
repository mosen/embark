package main.java.com.github.mosen.micronaut.security.saml.routes;

import com.onelogin.saml2.Auth;
import io.micronaut.context.annotation.Executable;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
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
   * @return The OneLogin SAML Instance associated with this controller.
   */
  Auth getAuth();

  /**
   * Performs an authorization redirect to SAML IdP using SAML URI/GET redirect binding
   *
   * @param request The current request
   * @return A redirecting http response
   */
  @Executable
  HttpResponse login(HttpRequest request);

  /**
   * Receive the SAML IdP Assertion (POST binding)
   *
   * @param request The current request
   * @return A response
   */
  @Executable
  HttpResponse assertionConsumerService(HttpRequest<Map<String, Object>> request);


  HttpResponse<String> metadata();
}
