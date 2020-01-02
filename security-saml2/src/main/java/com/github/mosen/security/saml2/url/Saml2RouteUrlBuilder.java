package com.github.mosen.security.saml2.url;

import java.net.URI;
import java.net.URL;
import io.micronaut.context.annotation.DefaultImplementation;

@DefaultImplementation(DefaultSaml2RouteUrlBuilder.class)
public interface Saml2RouteUrlBuilder extends AbsoluteUrlBuilder {

  URL buildLoginUrl(String providerName);

  URL buildAssertionConsumerServiceUrl(String providerName);

  URI buildLoginUri(String providerName);

  URI buildAssertionConsumerServiceUri(String providerName);
}
