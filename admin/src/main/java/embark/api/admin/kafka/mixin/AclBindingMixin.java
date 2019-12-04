package embark.api.admin.kafka.mixin;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.kafka.common.acl.AccessControlEntry;
import org.apache.kafka.common.acl.AclBinding;
import org.apache.kafka.common.resource.ResourcePattern;

public abstract class AclBindingMixin {

  @JsonCreator
  public AclBindingMixin(
          @JsonProperty("entry") AccessControlEntry entry,
          @JsonProperty("pattern") ResourcePattern pattern
          ) {

  }
}
