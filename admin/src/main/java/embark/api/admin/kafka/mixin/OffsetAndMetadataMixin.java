package embark.api.admin.kafka.mixin;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.kafka.clients.consumer.OffsetAndMetadata;

public abstract class OffsetAndMetadataMixin {
  @JsonCreator
  public OffsetAndMetadataMixin(
          @JsonProperty("offset") long offset,
          @JsonProperty("metadata") String metadata
  ) { }

  @JsonProperty("offset") abstract long offset();
  @JsonProperty("metadata") abstract String metadata();
}
