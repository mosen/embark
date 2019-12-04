package embark.api.connect.dto;

import java.util.Map;

public class ConnectorAttrs {
  public String name;
  public Map<String, String> config;

  public ConnectorAttrs(String name) {
    this.name = name;
  }

  public ConnectorAttrs() { }
}
