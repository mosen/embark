package embark.api.admin.security.authentication;

import io.micronaut.security.authentication.UserDetails;

import java.util.Collection;
import java.util.Map;

public class KafkaUserDetails extends UserDetails {

  private String userPrincipal;

  public KafkaUserDetails(String username, Collection<String> roles) {
    super(username, roles);
  }

  public KafkaUserDetails(String username, Collection<String> roles, Map<String, Object> attributes) {
    super(username, roles, attributes);
  }

}
