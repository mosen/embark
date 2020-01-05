package com.github.mosen.security.saml2.serviceprovider;

import com.onelogin.saml2.Auth;
import com.onelogin.saml2.authn.AuthnRequest;
import com.onelogin.saml2.authn.SamlResponse;
import com.onelogin.saml2.exception.SettingsException;
import com.onelogin.saml2.settings.Saml2Settings;
import com.onelogin.saml2.settings.SettingsBuilder;
import io.micronaut.context.BeanContext;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.uri.UriBuilder;
import io.micronaut.security.authentication.AuthenticationFailed;
import io.micronaut.security.authentication.AuthenticationResponse;
import io.reactivex.Flowable;
import org.joda.time.DateTime;
import org.joda.time.Instant;
import org.reactivestreams.Publisher;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Singleton;
import java.io.IOException;
import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Singleton
public class DefaultSAML2ServiceProvider implements SAML2ServiceProvider {

  private static final Logger LOG = LoggerFactory.getLogger(DefaultSAML2ServiceProvider.class);

  private final Saml2Settings settings;
  // TODO: SAML Attribute -> User Mapper, See: OauthUserDetailsMapper
  private final Auth auth;

  public DefaultSAML2ServiceProvider() throws com.onelogin.saml2.exception.Error, SettingsException, IOException {
    this.settings = new SettingsBuilder().fromFile("onelogin.saml.properties").build();
    this.auth = new Auth();
  }

  @Override
  public String getName() {
    return "default";
  }

  @Override
  public Saml2Settings getSettings() {
    return this.auth.getSettings();
  }

  /**
   * Initiate SAML2 Authentication via HTTP Redirect Binding.
   *
   * @param originating The originating request
   * @return The redirection response
   */
  @Override
  public Publisher<HttpResponse> authorizationRedirect(HttpRequest originating) {

    Saml2Settings settings = this.auth.getSettings();
    AuthnRequest authnRequest = new AuthnRequest(settings, false, false, true);

    try {
      String samlRequest = authnRequest.getEncodedAuthnRequest();
      String ssoUrl = auth.getSSOurl();

      String relayState = originating.getUri().toString();

      UriBuilder redirectBuilder = UriBuilder
              .of(ssoUrl)
              .queryParam("SAMLRequest", samlRequest)
              .queryParam("RelayState", relayState);

      if (settings.getAuthnRequestsSigned()) {
        String sigAlg = settings.getSignatureAlgorithm();
        String signature = this.auth.buildRequestSignature(samlRequest, relayState, sigAlg);
        redirectBuilder = redirectBuilder.queryParam("SigAlg", sigAlg)
                .queryParam("Signature", signature);
      }


      String lastRequestId = authnRequest.getId();
      String lastRequest = authnRequest.getAuthnRequestXml();
      URI redirectUri = redirectBuilder.build();

//      if (!stay) {
//        LOG.debug("AuthNRequest sent to " + ssoUrl + " --> " + samlRequest);
//      }
      return Flowable.just(HttpResponse.temporaryRedirect(redirectUri));
    } catch (Exception e) {
      return Flowable.just(HttpResponse.serverError());
    }
  }

  /**
   * Verify and consume the SAML2 Assertion.
   *
   * @param request The SAML2 assertion request
   * @return An authentication response to pass to LoginHandler
   */
  @Override
  public Publisher<AuthenticationResponse> onCallback(String SAMLResponse) {
    if (LOG.isTraceEnabled()) {
      LOG.trace("Received assertion from saml2 provider [{}]", "idpname");
    }

    Boolean authenticated = false;
    LOG.info(SAMLResponse);


    if (SAMLResponse != null) {
      try {
        SamlResponse samlResponse = new SamlResponse(this.auth.getSettings(), null);
        samlResponse.loadXmlFromBase64(SAMLResponse);
        String lastResponse = samlResponse.getSAMLResponseXml();

        LOG.info(lastResponse);

        if (samlResponse.isValid()) {

        } else {

        }
      } catch (Exception e) {

      }

      return Flowable.just(new AuthenticationFailed());
    } else {
//      errors.add("invalid_binding");
      String errorMsg = "SAML Response not found, Only supported HTTP_POST Binding";
      LOG.error("processResponse error." + errorMsg);
      // throw new Error(errorMsg, Error.SAML_RESPONSE_NOT_FOUND);
      return Flowable.just(new AuthenticationFailed());
    }
  }
}
