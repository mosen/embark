package embark.api.admin.kafka.mixin;
import io.swagger.v3.oas.annotations.media.Schema;
import org.apache.kafka.common.acl.AccessControlEntry;
import org.apache.kafka.common.acl.AclPermissionType;
import org.apache.kafka.common.acl.AclOperation;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public abstract class AccessControlEntryMixin {

  @JsonCreator
  public AccessControlEntryMixin(
          @JsonProperty("principal") String principal,
          @JsonProperty("host") String host,
          @JsonProperty("isUnknown") boolean isUnknown,
          @JsonProperty("permissionType") AclPermissionType permissionType,
          @JsonProperty("operation") AclOperation operation
  ) {

  }

//  @Schema(description="The associated security principal", required=true)
//  public String getPrincipal() {
//    return principal;
//  }
//
//  public void setPrincipal(String principal) {
//    this.principal = principal;
//  }
//
//  @Schema(description="true if this AclResource has any UNKNOWN components.")
//  public boolean isUnknown() {
//    return isUnknown;
//  }
//
//  public void setUnknown(boolean unknown) {
//    isUnknown = unknown;
//  }
//
//  @Schema(description="The host to match, or `*` for all hosts.", required=true)
//  public String getHost() {
//    return host;
//  }
//
//  public void setHost(String host) {
//    this.host = host;
//  }
//
//  @Schema(description="The permission type, one of ALLOW, ANY, DENY, UNKNOWN")
//  public String getPermissionType() {
//    return permissionType.name();
//  }
//
//  public void setPermissionType(String permissionType) {
//    this.permissionType = AclPermissionType.fromString(permissionType);
//  }
//
//  @Schema(description="The operation to perform", required=true)
//  public String getOperation() {
//    return operation.name();
//  }
//
//  public void setOperation(String operation) {
//    this.operation = AclOperation.fromString(operation);
//  }
}
