@Configuration
@Requires(property = SamlConfigurationProperties.PREFIX + ".enabled", value = StringUtils.TRUE)
package com.github.mosen.security.saml2;

import com.github.mosen.security.saml2.configuration.SamlConfigurationProperties;
import io.micronaut.context.annotation.Configuration;
import io.micronaut.context.annotation.Requires;
import io.micronaut.core.util.StringUtils;
