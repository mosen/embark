package com.github.mosen.security.saml2.serviceprovider;

import com.onelogin.saml2.authn.AuthnRequest;
import com.onelogin.saml2.settings.Saml2Settings;
import io.micronaut.context.BeanContext;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.uri.UriBuilder;
import io.micronaut.security.authentication.AuthenticationResponse;
import org.reactivestreams.Publisher;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;

public class DefaultSAML2ServiceProvider implements SAML2ServiceProvider {

  private static final Logger LOG = LoggerFactory.getLogger(DefaultSAML2ServiceProvider.class);

//  private final OauthClientConfiguration clientConfiguration;
//  private final OauthUserDetailsMapper userDetailsMapper;
//  private final AuthorizationRedirectHandler redirectHandler;
//  private final OauthAuthorizationResponseHandler authorizationResponseHandler;
  private final BeanContext beanContext;
//  private final SecureEndpoint tokenEndpoint;

  /**
   * @param clientConfiguration The client configuration
   * @param userDetailsMapper The user details mapper
   * @param redirectHandler The redirect URL builder
   * @param authorizationResponseHandler The authorization response handler
   * @param beanContext The bean context
   */
  public DefaultSAML2ServiceProvider(
//          @Parameter OauthUserDetailsMapper userDetailsMapper,
//                            @Parameter OauthClientConfiguration clientConfiguration,
//                            AuthorizationRedirectHandler redirectHandler,
//                            OauthAuthorizationResponseHandler authorizationResponseHandler,
                            BeanContext beanContext) {
//    this.clientConfiguration = clientConfiguration;
//    this.userDetailsMapper = userDetailsMapper;
//    this.redirectHandler = redirectHandler;
//    this.authorizationResponseHandler = authorizationResponseHandler;
    this.beanContext = beanContext;
//    this.tokenEndpoint = getTokenEndpoint();
  }

  @Override
  public String getName() {
    return null;
  }

  /**
   * Initiate SAML2 Authentication via HTTP Redirect Binding.
   *
   * @param originating The originating request
   * @return The redirection response
   */
  @Override
  public Publisher<HttpResponse> authorizationRedirect(HttpRequest originating) {

    Map<String, String> parameters = new HashMap<String, String>();
    Saml2Settings settings = this.auth.getSettings();
    AuthnRequest authnRequest = new AuthnRequest(settings, false, false, true);


    try {
      String samlRequest = authnRequest.getEncodedAuthnRequest();
      String ssoUrl = auth.getSSOurl();

      UriBuilder redirectBuilder = UriBuilder
              .of(ssoUrl)
              .queryParam("SAMLRequest", samlRequest);

//    String relayState;
//    if (returnTo == null) {
//      relayState = ServletUtils.getSelfRoutedURLNoQuery(request);
//    } else {
//      relayState = returnTo;
//    }
//
//    if (!relayState.isEmpty()) {
//      parameters.put("RelayState", relayState);
//    }
//
      if (settings.getAuthnRequestsSigned()) {
        String sigAlg = settings.getSignatureAlgorithm();
//        String signature = this.auth.buildRequestSignature(samlRequest, relayState, sigAlg);
        String signature = this.auth.buildRequestSignature(samlRequest, "", sigAlg);
        redirectBuilder = redirectBuilder.queryParam("SigAlg", sigAlg)
                .queryParam("Signature", signature);
      }


      String lastRequestId = authnRequest.getId();
      String lastRequest = authnRequest.getAuthnRequestXml();
      URI redirectUri = redirectBuilder.build();

      return HttpResponse.temporaryRedirect(redirectUri);
//    if (!stay) {
//      LOGGER.debug("AuthNRequest sent to " + ssoUrl + " --> " + samlRequest);
//    }
//    return ServletUtils.sendRedirect(response, ssoUrl, parameters, stay);
    } catch (Exception e) {
      return HttpResponse.serverError();
    }
  }

  /**
   * Verify and consume the SAML2 Assertion.
   *
   * @param request The SAML2 assertion request
   * @return An authentication response to pass to LoginHandler
   */
  @Override
  public Publisher<AuthenticationResponse> onCallback(HttpRequest<Map<String, Object>> request) {
    return null;
  }
}
