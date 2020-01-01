package com.github.mosen.security.saml2.serviceprovider;

import com.onelogin.saml2.Auth;
import com.onelogin.saml2.exception.Error;
import com.onelogin.saml2.exception.SettingsException;
import com.onelogin.saml2.settings.Saml2Settings;
import io.micronaut.context.BeanContext;
import io.micronaut.context.annotation.Factory;
import io.micronaut.context.annotation.Requires;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Singleton;
import java.io.IOException;

@Factory
public class OneloginAuthProvider {

  private static final Logger LOG = LoggerFactory.getLogger(OneloginAuthProvider.class);

  private final BeanContext beanContext;

  OneloginAuthProvider(BeanContext beanContext) {
    LOG.info("OneloginAuthProvider()");
    this.beanContext = beanContext;
  }

  @Singleton
  Auth auth() throws SettingsException, IOException, Error {
      return new Auth();
  }

}
