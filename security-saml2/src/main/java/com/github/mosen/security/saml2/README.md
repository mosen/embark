# micronaut-security-saml2 #

This structure is copied from micronaut-oauth2 because I did not know how to make a security provider for micronaut

https://github.com/micronaut-projects/micronaut-security/tree/master/security-oauth2/src/main/java/io/micronaut/security/oauth2

## Differences from OAuth2 ##

- OAuth2 uses @EachBean to support multiple OAuth2 clients. The Onelogin SAML toolkit by default assumes a single IdP.
- We don't use any kind of ConfigurationProperties class. I'll just let the Onelogin default slide.
- Response and Request types shouldn't be necessary as they are already modelled by the
  Onelogin `SamlResponse` and `AuthnRequest` classes.