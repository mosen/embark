package embark.api.connect.dto;

import java.util.Map;

public class TaskDetailAttrs {
  public class TaskDetailId {
    public String connector;
    public Integer task;
  }

  public TaskDetailId id;
  public Map<String, String> config;
}
