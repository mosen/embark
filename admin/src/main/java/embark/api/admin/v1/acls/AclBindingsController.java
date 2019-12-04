package embark.api.admin.v1.acls;

import io.micronaut.core.version.annotation.Version;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.*;
import io.micronaut.validation.Validated;
import io.reactivex.Single;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.kafka.clients.admin.AdminClient;
import org.apache.kafka.clients.admin.CreateAclsResult;
import org.apache.kafka.common.KafkaFuture;
import org.apache.kafka.common.acl.*;
import org.apache.kafka.common.resource.PatternType;
import org.apache.kafka.common.resource.ResourcePatternFilter;
import org.apache.kafka.common.resource.ResourceType;

import javax.annotation.Nullable;
import java.util.ArrayList;
import java.util.Collection;

@Validated
@Controller("${api.base-path:}/v1/acl-bindings")
public class AclBindingsController {

    private final AdminClient adminClient;

    public AclBindingsController(AdminClient adminClient) {
        this.adminClient = adminClient;
    }

    @Get("{?principal,host,resourceType,resource}") // ,host,operation,permission_type
    @Version("1")
    @Operation(summary = "Get a list of Access Control Bindings", description = "Gets a list of Access Control Bindings")
    @ApiResponse(responseCode = "502", description = "Unable to connect to Kafka broker(s) or connection was disconnected")
    @ApiResponse(responseCode = "503", description = "Upstream API requires authentication but it was not configured here")
    @Tag(name = "acl-bindings")
    public Single<Collection<AclBinding>> describeAcls(
            @Nullable String principal,
            @Nullable String host,
            @Nullable String resourceType,
            @Nullable String resource
    ) {
        ResourcePatternFilter rpf = ResourcePatternFilter.ANY;
        if (resourceType != null) {
            ResourceType rt = ResourceType.fromString(resourceType);
            if (rt.isUnknown()) {
                return null; // TODO: Throw an exception for unknown RT
            }

            rpf = new ResourcePatternFilter(rt, resource, PatternType.ANY);
        }

        AccessControlEntryFilter acef = AccessControlEntryFilter.ANY;
        if (principal != null) {
            acef = new AccessControlEntryFilter(principal, host, AclOperation.ALL, AclPermissionType.ANY);
        }

        AclBindingFilter filter = new AclBindingFilter(rpf, acef);
        KafkaFuture<Collection<AclBinding>> kafkaFuture = this.adminClient.describeAcls(filter)
                .values();
        return Single.fromFuture(kafkaFuture).map(ArrayList::new);
    }

    @Post()
    @Version("1")
    @Operation(summary = "Create ACL Bindings", description = "Create ACL bindings")
    @ApiResponse(responseCode = "502", description = "Unable to connect to Kafka broker(s) or connection was disconnected")
    @Tag(name = "acl-bindings")
    public Single<HttpResponse> createAcls(
        @Parameter(description="A list of ACL bindings to create") @Body Single<Collection<AclBinding>> createAclBindings
    ) {
        return createAclBindings.map(ab -> {
            CreateAclsResult result =adminClient.createAcls(ab);
            return Single.fromFuture(result.all());
        }).map(HttpResponse::created);
    }
}