package embark.api.admin.kafka.mixin;


import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.kafka.common.PartitionInfo;
import org.apache.kafka.common.TopicPartitionInfo;
import org.apache.kafka.common.acl.AclOperation;

import java.util.List;
import java.util.Set;

public abstract class TopicDescriptionMixin {

  @JsonCreator
  public TopicDescriptionMixin(
    @JsonProperty("name") String name,
    @JsonProperty("internal") boolean internal,
    @JsonProperty("partitions") List<PartitionInfo> partitions
  ) {

  }

  @JsonProperty("name") abstract String name();
  @JsonProperty("internal") abstract boolean isInternal();
  @JsonProperty("partitions") abstract List<TopicPartitionInfo> partitions();
  @JsonProperty("authorizedOperations") abstract Set<AclOperation> authorizedOperations();
}
