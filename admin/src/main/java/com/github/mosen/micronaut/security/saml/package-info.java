@Configuration
@Requires(property = SamlConfigurationProperties.PREFIX + ".enabled", value = StringUtils.TRUE)
package com.github.mosen.micronaut.security.saml;

import com.github.mosen.micronaut.security.saml.configuration.SamlConfigurationProperties;
import io.micronaut.context.annotation.Configuration;
import io.micronaut.context.annotation.Requires;
import io.micronaut.core.util.StringUtils;
