package com.github.mosen.security.saml2;

import com.github.mosen.security.saml2.routes.DefaultSamlController;
import com.onelogin.saml2.authn.AuthnRequest;
import com.onelogin.saml2.exception.Error;
import com.onelogin.saml2.exception.SettingsException;
import com.onelogin.saml2.servlet.ServletUtils;
import com.onelogin.saml2.settings.SettingsBuilder;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Singleton;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * This class wraps the OneLogin Auth instance to provide compatibility with micronauts request and response classes
 * more seamlessly.
 */
@Singleton
public class Auth extends com.onelogin.saml2.Auth {

  private static final Logger LOG = LoggerFactory.getLogger(Auth.class);

  /**
   * The id of the last request (Authn or Logout) generated
   */
  private String lastMicronautRequestId;

  /**
   * The most recently-constructed/processed XML SAML request
   * (AuthNRequest, LogoutRequest)
   */
  private String lastMicronautRequest;


  /**
   * HttpRequest object to be processed (Contains GET and POST parameters, session, ...).
   */
  private HttpRequest micronautRequest;

  /**
   * HttpResponse object to be used (For example to execute the redirections).
   */
  private HttpResponse micronautResponse;

  public Auth() throws IOException, SettingsException, Error {
    super();
  }

  public <B> Auth(HttpRequest<B> request, HttpResponse response) throws IOException, SettingsException, Error {
    this();
    this.micronautRequest = request;
    this.micronautResponse = response;
  }


  /**
   * Initiates the SSO process.
   * Overridden from `com.onelogin.saml2` for compatibility with micronaut HttpRequest
   *
   * @param returnTo
   *				The target URL the user should be returned to after login (relayState).
   *				Will be a self-routed URL when null, or not be appended at all when an empty string is provided
   * @param forceAuthn
   *				When true the AuthNRequest will set the ForceAuthn='true'
   * @param isPassive
   *				When true the AuthNRequest will set the IsPassive='true'
   * @param setNameIdPolicy
   *            When true the AuthNRequest will set a nameIdPolicy
   * @param stay
   *            True if we want to stay (returns the url string) False to execute redirection
   * @param nameIdValueReq
   *            Indicates to the IdP the subject that should be authenticated
   *
   * @return the SSO URL with the AuthNRequest if stay = True
   *
   * @throws IOException
   * @throws SettingsException
   */
  @Override
  public String login(String returnTo, Boolean forceAuthn, Boolean isPassive, Boolean setNameIdPolicy, Boolean stay, String nameIdValueReq) throws IOException, SettingsException {
    Map<String, String> parameters = new HashMap<String, String>();

    AuthnRequest authnRequest = new AuthnRequest(this.getSettings(), forceAuthn, isPassive, setNameIdPolicy, nameIdValueReq);

    String samlRequest = authnRequest.getEncodedAuthnRequest();

    parameters.put("SAMLRequest", samlRequest);

    String relayState;
    if (returnTo == null) {
      relayState = ServletUtils.getSelfRoutedURLNoQuery(request);
    } else {
      relayState = returnTo;
    }

    if (!relayState.isEmpty()) {
      parameters.put("RelayState", relayState);
    }

    if (this.getSettings().getAuthnRequestsSigned()) {
      String sigAlg = this.getSettings().getSignatureAlgorithm();
      String signature = this.buildRequestSignature(samlRequest, relayState, sigAlg);

      parameters.put("SigAlg", sigAlg);
      parameters.put("Signature", signature);
    }

    String ssoUrl = getSSOurl();

    lastMicronautRequestId = authnRequest.getId();
    lastMicronautRequest = authnRequest.getAuthnRequestXml();

    if (!stay) {
      LOG.debug("AuthNRequest sent to " + ssoUrl + " --> " + samlRequest);
    }

    // return ServletUtils.sendRedirect(response, ssoUrl, parameters, stay);
  }
}
