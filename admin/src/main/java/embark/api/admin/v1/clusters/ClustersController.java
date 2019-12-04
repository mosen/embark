package embark.api.admin.v1.clusters;

import io.micronaut.core.version.annotation.Version;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.reactivex.Single;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.kafka.clients.admin.AdminClient;
import org.apache.kafka.common.KafkaFuture;
import org.apache.kafka.common.Node;

import java.util.ArrayList;
import java.util.Collection;

@Controller("${api.base-path:}/v1/clusters")
public class ClustersController {

    private final AdminClient adminClient;

    public ClustersController(AdminClient adminClient) {
        this.adminClient = adminClient;
    }

    @Get("/{name}/nodes")
    @Version("1")
    @Operation(summary = "List nodes", description = "Get detailed information about the Kafka Cluster nodes")
    @Tag(name = "clusters")
    public Single<Collection<Node>> describeClusterNodes(
            @Parameter(description="The cluster name (Not used yet)", hidden = true) String name
    ) {
        KafkaFuture<Collection<Node>> kafkaFuture = this.adminClient
                .describeCluster()
                .nodes();

        return Single.fromFuture(kafkaFuture).map(ArrayList::new);
    }

    @Get("/{name}/controller")
    @Version("1")
    @Operation(summary = "Get cluster controller node", description = "Get detailed information about the Kafka Cluster Controller Node")
    @Tag(name = "clusters")
    public Single<Node> describeClusterController(String name) {
        KafkaFuture<Node> kafkaFuture = this.adminClient
                .describeCluster()
                .controller();

        return Single.fromFuture(kafkaFuture);
    }
}