package embark.api.connect.dto;

import java.util.List;

public class ConnectorDetailAttrs extends ConnectorAttrs {
  public List<TaskDto> tasks;

  public ConnectorDetailAttrs(String name, List<TaskDto> tasks) {
    super(name);
    this.tasks = tasks;
  }

  public ConnectorDetailAttrs() { }
}
