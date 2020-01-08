package com.github.mosen.security.saml2.url;

import java.net.URI;
import java.net.URL;
import io.micronaut.context.annotation.DefaultImplementation;
import io.micronaut.http.HttpRequest;

import javax.annotation.Nullable;

/**
 * Responsible for building URLs to routes that will consume assertions.
 *
 * Almost has an identical purpose to OauthRouteUrlBuilder - To support the use of multiple IdP's using a single
 * implementation.
 *
 * @author Mosen
 * @see io.micronaut.security.oauth2.url.OauthRouteUrlBuilder
 */
@DefaultImplementation(DefaultSaml2RouteUrlBuilder.class)
public interface Saml2RouteUrlBuilder extends AbsoluteUrlBuilder {

  URL buildAuthnRequestUrl(@Nullable HttpRequest originating, String idpName);

  URL buildAssertionConsumerServiceUrl(@Nullable HttpRequest originating, String idpName);

  URL buildServiceProviderMetadataUrl(@Nullable HttpRequest originating, String idpName);

  URI buildAuthnRequestUri(@Nullable String idpName);

  URI buildAssertionConsumerServiceUri(@Nullable String idpName);

  URI buildServiceProviderMetadataUri(@Nullable String idpName);
}
