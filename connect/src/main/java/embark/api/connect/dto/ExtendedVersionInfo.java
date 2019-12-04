package embark.api.connect.dto;

public class ExtendedVersionInfo extends VersionInfo {
  public String connectUrl;

  public ExtendedVersionInfo(VersionInfo info, String connectUrl) {
    this.version = info.version;
    this.commit = info.commit;
    this.kafka_cluster_id = info.kafka_cluster_id;
    this.connectUrl = connectUrl;
  }
}
