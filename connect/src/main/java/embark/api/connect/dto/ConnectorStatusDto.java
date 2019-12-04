package embark.api.connect.dto;

import java.util.List;

public class ConnectorStatusDto {
  public String name;
  public ConnectorStateDto connector;
  public List<TaskStatusDto> tasks;
}

