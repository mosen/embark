package embark.api.admin.kafka.mixin;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.kafka.clients.admin.ConfigEntry;

import java.util.List;

public abstract class ConfigEntryMixin {
  @JsonCreator
  public ConfigEntryMixin(
    @JsonProperty("name") String name,
    @JsonProperty("value") String value
  ) {

  }

  @JsonProperty("name") abstract String name();
  @JsonProperty("value") abstract String value();
  @JsonProperty("source") abstract ConfigEntry.ConfigSource source();
  @JsonProperty("isSensitive") abstract boolean isSensitive();
  @JsonProperty("isReadOnly") abstract boolean isReadOnly();
  @JsonProperty("synonyms") abstract List<ConfigEntry.ConfigSynonym> synonyms();
}
