package embark.api.admin.kafka.mixin;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public abstract class TopicListingMixin {
    @JsonCreator
    public TopicListingMixin(
      @JsonProperty("name") String name,
      @JsonProperty("internal") boolean internal
    ) { }

    @JsonProperty("internal") abstract boolean isInternal();
    @JsonProperty("name") abstract String name();
}
