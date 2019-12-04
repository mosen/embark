package embark.api.connect.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConnectorPluginAttrs {
  @JsonProperty("class")
  public String clazz;

  public String type;
  public String version;



  public ConnectorPluginAttrs() {  }
}
