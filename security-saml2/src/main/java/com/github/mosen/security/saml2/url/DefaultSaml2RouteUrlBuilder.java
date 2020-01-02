package com.github.mosen.security.saml2.url;

import io.micronaut.http.HttpRequest;

import javax.annotation.Nullable;
import java.net.URI;
import java.net.URL;

public class DefaultSaml2RouteUrlBuilder implements Saml2RouteUrlBuilder {

  @Override
  public URL buildLoginUrl(String providerName) {
    return null;
  }

  @Override
  public URL buildAssertionConsumerServiceUrl(String providerName) {
    return null;
  }

  @Override
  public URI buildLoginUri(String providerName) {
    return null;
  }

  @Override
  public URI buildAssertionConsumerServiceUri(String providerName) {
    return null;
  }

  @Override
  public URL buildUrl(@Nullable HttpRequest current, String path) {
    return null;
  }
}
