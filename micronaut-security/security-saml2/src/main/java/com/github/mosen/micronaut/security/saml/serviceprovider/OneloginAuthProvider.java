package main.java.com.github.mosen.micronaut.security.saml.serviceprovider;

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
@Requires(classes=com.onelogin.saml2.Auth.class)
public class OneloginAuthProvider {

  private static final Logger LOG = LoggerFactory.getLogger(OneloginAuthProvider.class);

  private final BeanContext beanContext;

  OneloginAuthProvider(BeanContext beanContext) {
    LOG.info("OneloginAuthProvider()");
    this.beanContext = beanContext;
  }

  @Singleton
  Auth auth(Saml2Settings settings) throws SettingsException, IOException, Error {
      return new Auth();
  }

}
