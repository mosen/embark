package embark.api.admin.kafka.mixin;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.kafka.common.resource.PatternType;
import org.apache.kafka.common.resource.ResourceType;

public abstract class ResourcePatternMixin {
  @JsonCreator
  public ResourcePatternMixin(
          @JsonProperty("resourceType") ResourceType resourceType,
          @JsonProperty("name") String name,
          @JsonProperty("patternType") PatternType patternType
          ) {
  }
}
