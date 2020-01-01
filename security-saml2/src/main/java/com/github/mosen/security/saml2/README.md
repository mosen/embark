# micronaut-security-saml2 #

This structure is copied from micronaut-oauth2 because I did not know how to make a security provider for micronaut

https://github.com/micronaut-projects/micronaut-security/tree/master/security-oauth2/src/main/java/io/micronaut/security/oauth2

## Differences from OAuth2 ##

- OAuth2 uses @EachBean to support multiple OAuth2 clients. The Onelogin SAML toolkit by default assumes a single IdP.
