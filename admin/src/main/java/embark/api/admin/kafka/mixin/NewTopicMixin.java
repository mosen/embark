package embark.api.admin.kafka.mixin;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.kafka.clients.admin.NewTopic;

public abstract class NewTopicMixin {
  @JsonCreator
  public NewTopicMixin(
      @JsonProperty("name") String name,
      @JsonProperty("numPartitions") int numPartitions,
      @JsonProperty("replicationFactor") short replicationFactor
  ) { }


}
