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
package com.github.mosen.security.saml2.routes;

import com.github.mosen.security.saml2.url.Saml2RouteUrlBuilder;
import com.onelogin.saml2.Auth;
import io.micronaut.context.BeanContext;
import io.micronaut.context.ExecutionHandleLocator;
import io.micronaut.core.convert.ConversionService;
import io.micronaut.http.HttpMethod;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.MediaType;
import io.micronaut.inject.BeanDefinition;
import io.micronaut.inject.ExecutionHandle;
import io.micronaut.inject.MethodExecutionHandle;
import io.micronaut.inject.qualifiers.Qualifiers;
import io.micronaut.web.router.DefaultRouteBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Singleton;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;

/**
 * Registers routes dynamically for SAML assertion consumer service and redirect binding.
 * Adapted from micronaut-security oauth2 by James Kleeh
 *
 */
@Singleton
public class Saml2RouteBuilder extends DefaultRouteBuilder {

  private static final Logger LOG = LoggerFactory.getLogger(Saml2RouteBuilder.class);

  /**
   * @param executionHandleLocator The execution handler locator
   * @param uriNamingStrategy The URI naming strategy
   * @param conversionService The conversion service
   * @param beanContext The bean context
   * @param saml2Configuration SAML2 configuration
   * @param saml2RouteUrlBuilder The SAML2 URL builder
   * @param controllerList The list of controllers
   */
  Saml2RouteBuilder(ExecutionHandleLocator executionHandleLocator,
                    UriNamingStrategy uriNamingStrategy,
                    ConversionService<?> conversionService,
                    BeanContext beanContext,
//                    Saml2Configuration saml2Configuration,
                    Saml2RouteUrlBuilder saml2RouteUrlBuilder,
                    List<SamlController> controllerList) {
    super(executionHandleLocator, uriNamingStrategy, conversionService);


    if (controllerList.isEmpty()) {
      if (LOG.isDebugEnabled()) {
        LOG.debug("No Oauth controllers found. Skipping registration of routes");
      }
    } else {
      AtomicBoolean endSessionRegistered = new AtomicBoolean();

      controllerList.forEach((controller) -> {
        Auth auth = controller.getAuth();
        // String name = client.getName();
        String name = "idpname";
//        boolean isDefaultProvider = oauthConfiguration.getDefaultProvider().filter(provider -> provider.equals(name)).isPresent();
        boolean isDefaultProvider = true;

        BeanDefinition<SamlController> bd = beanContext.getBeanDefinition(SamlController.class, Qualifiers.byName(name));

        bd.findMethod("login", HttpRequest.class).ifPresent(m -> {
          String loginPath = saml2RouteUrlBuilder.buildLoginUri(name).getPath();
          if (LOG.isDebugEnabled()) {
            LOG.debug("Registering login route [GET: {}] for saml2 configuration [{}]", loginPath, name);
          }
          buildRoute(HttpMethod.GET, loginPath, ExecutionHandle.of(controller, m));
          if (isDefaultProvider) {
            final String defaultLoginPath = saml2RouteUrlBuilder.buildLoginUri(null).getPath();
            if (LOG.isDebugEnabled()) {
              LOG.debug("Registering default login route [GET: {}] for saml2 configuration [{}]", defaultLoginPath, name);
            }
            buildRoute(HttpMethod.GET, defaultLoginPath, ExecutionHandle.of(controller, m));
          }
        });

        bd.findMethod("assertionConsumerService", HttpRequest.class).ifPresent(m -> {
          String callbackPath = saml2RouteUrlBuilder.buildAssertionConsumerServiceUri(name).getPath();
          MethodExecutionHandle<SamlController, Object> executionHandle = ExecutionHandle.of(controller, m);
          if (LOG.isDebugEnabled()) {
            LOG.debug("Registering assertion consumer service route [GET: {}] for saml2 configuration [{}]", callbackPath, name);
            LOG.debug("Registering assertion consumer service route [POST: {}] for saml2 configuration [{}]", callbackPath, name);
          }
          buildRoute(HttpMethod.GET, callbackPath, executionHandle);
          buildRoute(HttpMethod.POST, callbackPath, executionHandle).consumes(MediaType.APPLICATION_FORM_URLENCODED_TYPE);

          if (isDefaultProvider) {
            final String defaultCallbackPath = saml2RouteUrlBuilder.buildAssertionConsumerServiceUri(null).getPath();
            if (LOG.isDebugEnabled()) {
              LOG.debug("Registering default assertion consumer service route [GET: {}] for saml2 configuration [{}]", defaultCallbackPath, name);
              LOG.debug("Registering default assertion consumer service route [POST: {}] for saml2 configuration [{}]", defaultCallbackPath, name);
            }
            buildRoute(HttpMethod.GET, defaultCallbackPath, executionHandle);
            buildRoute(HttpMethod.POST, defaultCallbackPath, executionHandle).consumes(MediaType.APPLICATION_FORM_URLENCODED_TYPE);
          }
        });
      });

      if (!endSessionRegistered.get() && LOG.isDebugEnabled()) {
        LOG.debug("Skipped registration of logout route. No openid clients found that support end session");
      }
    }
  }
}
