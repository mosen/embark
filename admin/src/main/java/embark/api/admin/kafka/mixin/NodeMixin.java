package embark.api.admin.kafka.mixin;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.kafka.common.Node;

public abstract class NodeMixin {

  @JsonCreator
  public NodeMixin(
          @JsonProperty("id") int id,
          @JsonProperty("host") String host,
          @JsonProperty("port") int port,
          @JsonProperty("rack") String rack
  ) { }

  @JsonProperty("id") abstract int id();
  @JsonProperty("host") abstract String host();
  @JsonProperty("port") abstract int port();
  @JsonProperty("rack") abstract String rack();

}
