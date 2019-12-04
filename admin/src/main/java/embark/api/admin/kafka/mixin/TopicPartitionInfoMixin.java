package embark.api.admin.kafka.mixin;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.kafka.common.Node;
import org.apache.kafka.common.TopicPartitionInfo;

import java.util.List;

public abstract class TopicPartitionInfoMixin {
  @JsonCreator
  public TopicPartitionInfoMixin(
          @JsonProperty("partition") int partition,
          @JsonProperty("leader") Node leader,
          @JsonProperty("replicas") List<Node> replicas,
          @JsonProperty("isr") List<Node> isr
  ) { }

  @JsonProperty("partition") abstract int partition();
  @JsonProperty("leader") abstract Node leader();
  @JsonProperty("replicas") abstract List<Node> replicas();
  @JsonProperty("isr") abstract List<Node> isr();

}
