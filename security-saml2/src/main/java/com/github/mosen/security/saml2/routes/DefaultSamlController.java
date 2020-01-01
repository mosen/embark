package com.github.mosen.security.saml2.routes;

import com.onelogin.saml2.Auth;
import com.onelogin.saml2.authn.AuthnRequest;
import com.onelogin.saml2.authn.SamlResponse;
import com.onelogin.saml2.exception.Error;
import com.onelogin.saml2.servlet.ServletUtils;
import com.onelogin.saml2.settings.Saml2Settings;
import io.micronaut.context.annotation.Parameter;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.*;
import io.micronaut.http.uri.UriBuilder;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.rules.SecurityRule;
import org.joda.time.DateTime;
import org.joda.time.Instant;
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

  private final Auth auth;

  DefaultSamlController(Auth auth) {
    LOG.info("DefaultSamlController()");
    this.auth = auth;
  }


  @Override
  public Auth getAuth() {
    return this.auth;
  }

  @Get("/login")
  public HttpResponse login(HttpRequest request) {
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

  @Post("/acs")
  @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
  public HttpResponse assertionConsumerService(@Body String SAMLResponse) {
    Boolean authenticated = false;
//    final com.onelogin.saml2.http.HttpRequest httpRequest = new com.onelogin.saml2.http.HttpRequest();

    //ServletUtils.makeHttpRequest(this.request);
//    final String samlResponseParameter = httpRequest.getParameter("SAMLResponse");

    if (SAMLResponse != null) {
      try {
        SamlResponse samlResponse = new SamlResponse(this.auth.getSettings(), null);
        samlResponse.loadXmlFromBase64(SAMLResponse);
        String lastResponse = samlResponse.getSAMLResponseXml();

        LOG.info(lastResponse);

        if (true) { // samlResponse.isValid(requestId)) {
          String nameid = samlResponse.getNameId();
          String nameidFormat = samlResponse.getNameIdFormat();
          String nameidNameQualifier = samlResponse.getNameIdNameQualifier();
          String nameidSPNameQualifier = samlResponse.getNameIdSPNameQualifier();
          authenticated = true;
          HashMap<String, List<String>> attributes = samlResponse.getAttributes();
          String sessionIndex = samlResponse.getSessionIndex();
          DateTime sessionExpiration = samlResponse.getSessionNotOnOrAfter();
          String lastMessageId = samlResponse.getId();
          String lastAssertionId = samlResponse.getAssertionId();
          List<Instant> lastAssertionNotOnOrAfter = samlResponse.getAssertionNotOnOrAfter();
          LOG.debug("processResponse success --> " + SAMLResponse);

          return HttpResponse.ok("YAY");
        } else {
//          errors.add("invalid_response");
          LOG.error("processResponse error. invalid_response");
          LOG.debug(" --> " + SAMLResponse);
//          errorReason = samlResponse.getError();
        }
      } catch (Exception e) {
        return HttpResponse.serverError();
      }

    } else {
//      errors.add("invalid_binding");
      String errorMsg = "SAML Response not found, Only supported HTTP_POST Binding";
      LOG.error("processResponse error." + errorMsg);
      // throw new Error(errorMsg, Error.SAML_RESPONSE_NOT_FOUND);
      return HttpResponse.serverError();
    }

    return HttpResponse.serverError("should not reach end of func");
  }

  @Get("/metadata")
  @Produces("text/xml")
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
