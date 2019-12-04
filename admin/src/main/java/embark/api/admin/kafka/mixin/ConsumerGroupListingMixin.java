package embark.api.admin.kafka.mixin;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.kafka.clients.admin.ConsumerGroupListing;

public abstract class ConsumerGroupListingMixin {
  @JsonCreator
  public ConsumerGroupListingMixin(
     @JsonProperty("groupId") String groupId,
     @JsonProperty("isSimpleConsumerGroup") boolean isSimpleConsumerGroup
  ) { }

  @JsonProperty("groupId") abstract String groupId();
  @JsonProperty("isSimpleConsumerGroup") abstract boolean isSimpleConsumerGroup();
}
