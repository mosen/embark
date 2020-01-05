/*
 * Copyright 2017-2019 original authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.github.mosen.security.saml2.url;

import io.micronaut.http.HttpRequest;
import io.micronaut.http.server.util.HttpHostResolver;
import io.micronaut.http.uri.UriBuilder;
import io.micronaut.http.uri.UriTemplate;
import io.micronaut.web.router.exceptions.RoutingException;

import javax.annotation.Nullable;
import javax.inject.Singleton;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

/**
 * Default implementation of the SAML 2.0 Route URL builder.
 *
 * Inspired by the OAuth route builder, except that our terminology is different.
 *
 * @author Mosen, James Kleeh
 * @see io.micronaut.security.oauth2.url.DefaultOauthRouteUrlBuilder
 */
@Singleton
public class DefaultSaml2RouteUrlBuilder implements Saml2RouteUrlBuilder {

  private final HttpHostResolver hostResolver;
  private final String authnRequestUriTemplate = "/saml/login{/idp}";
  private final String acsUriTemplate = "/saml/acs{/idp}";

  DefaultSaml2RouteUrlBuilder(HttpHostResolver hostResolver) {
    this.hostResolver = hostResolver;
  }

  @Override
  public URL buildAuthnRequestUrl(@Nullable HttpRequest originating, String idpName) {
    return build(originating, idpName, authnRequestUriTemplate);
  }

  @Override
  public URL buildAssertionConsumerServiceUrl(@Nullable HttpRequest originating, String idpName) {
    return build(originating, idpName, acsUriTemplate);
  }

  @Override
  public URI buildAuthnRequestUri(@Nullable String idpName) {
    try {
      return new URI(getPath(authnRequestUriTemplate, idpName));
    } catch (URISyntaxException e) {
      throw new RoutingException("Error building a URI for the path [" + authnRequestUriTemplate + "]", e);
    }
  }

  @Override
  public URI buildAssertionConsumerServiceUri(@Nullable String idpName) {
    try {
      return new URI(getPath(acsUriTemplate, idpName));
    } catch (URISyntaxException e) {
      throw new RoutingException("Error building a URI for the path [" + acsUriTemplate + "]", e);
    }
  }

  /**
   * Builds a URL with the provided arguments
   *
   * @param originating The originating request
   * @param idpName The identity provider name
   * @param uriTemplate The URI template
   * @return The URL
   */
  protected URL build(@Nullable HttpRequest originating, String idpName, String uriTemplate) {
    return buildUrl(originating, getPath(uriTemplate, idpName));
  }

  /**
   * Builds the path portion of the URL
   *
   * @param uriTemplate The uri template
   * @param idpName The identity provider name
   * @return The URL path
   */
  protected String getPath(String uriTemplate, String idpName) {
    Map<String, Object> uriParams = new HashMap<>(1);
    uriParams.put("idp", idpName);
    return UriTemplate.of(uriTemplate).expand(uriParams);
  }

  @Override
  public URL buildUrl(@Nullable HttpRequest current, String path) {
    try {
      return UriBuilder.of(hostResolver.resolve(current))
              .path(path)
              .build()
              .toURL();
    } catch (MalformedURLException e) {
      throw new RoutingException("Error building an absolute URL for the path", e);
    }
  }
}
