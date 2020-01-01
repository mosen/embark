package com.github.mosen.security.saml2.configuration;

import io.micronaut.context.annotation.ConfigurationProperties;
import io.micronaut.context.annotation.Requires;
import io.micronaut.core.util.StringUtils;
import io.micronaut.security.config.SecurityConfigurationProperties;

@Requires(property = SamlConfigurationProperties.PREFIX + ".enabled", value = StringUtils.TRUE, defaultValue = StringUtils.TRUE)
@ConfigurationProperties(SamlConfigurationProperties.PREFIX)
public class SamlConfigurationProperties {

  public static final String PREFIX = SecurityConfigurationProperties.PREFIX + ".saml2";

  /// adapt onelogin saml config
}
