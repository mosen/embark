package embark.api.admin.kafka.mixin;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.kafka.clients.admin.ConsumerGroupDescription;
import org.apache.kafka.clients.admin.MemberDescription;
import org.apache.kafka.common.ConsumerGroupState;
import org.apache.kafka.common.Node;
import org.apache.kafka.common.acl.AclOperation;

import java.util.Collection;
import java.util.Set;

public abstract class ConsumerGroupDescriptionMixin {
  @JsonCreator
  public ConsumerGroupDescriptionMixin(
          @JsonProperty("groupId") String groupId,
          @JsonProperty("isSimpleConsumerGroup") boolean isSimpleConsumerGroup,
          @JsonProperty("members") Collection<MemberDescription> members,
          @JsonProperty("partitionAssignor") String partitionAssignor,
          @JsonProperty("state") ConsumerGroupState state,
          @JsonProperty("coordinator") Node coordinator
  ) {

  }

  @JsonProperty("groupId") abstract String groupId();
  @JsonProperty("isSimpleConsumerGroup") abstract boolean isSimpleConsumerGroup();
  @JsonProperty("members") abstract Collection<MemberDescription> members();
  @JsonProperty("partitionAssignor") abstract String partitionAssignor();
  @JsonProperty("state") abstract ConsumerGroupState state();
  @JsonProperty("coordinator") abstract Node coordinator();
  @JsonProperty("authorizedOperations") abstract Set<AclOperation> authorizedOperations();
}
