package embark.api.admin.v1.consumergroups;

import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.reactivex.Single;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.kafka.clients.admin.AdminClient;
import org.apache.kafka.clients.admin.ConsumerGroupDescription;
import org.apache.kafka.clients.admin.ConsumerGroupListing;
import org.apache.kafka.clients.consumer.OffsetAndMetadata;
import org.apache.kafka.common.KafkaFuture;
import org.apache.kafka.common.TopicPartition;

import javax.validation.constraints.NotNull;
import java.util.Collection;
import java.util.Collections;
import java.util.Map;

@Controller("${api.base-path:}/v1/consumer-groups")
public class ConsumerGroupsController {

    private final AdminClient adminClient;

    public ConsumerGroupsController(AdminClient adminClient) {
        this.adminClient = adminClient;
    }

    @Get()
    @Operation(summary = "Get a list of consumer groups", description = "Gets a list of consumer groups from the Kafka broker(s)")
    @ApiResponse(responseCode = "502", description = "Unable to connect to Kafka broker(s) or connection was disconnected")
    @Tag(name = "consumer-groups")
    public Single<Collection<ConsumerGroupListing>> index() {
        // ListConsumerGroupsOptions options = new ListConsumerGroupsOptions();

        KafkaFuture<Collection<ConsumerGroupListing>> kafkaFuture = this.adminClient
                .listConsumerGroups()
                .all();

        return Single.fromFuture(kafkaFuture);
    }

    @Get("/{groupId}")
    @Operation(summary = "Get detail about a consumer group", description = "Get detailed attributes about a consumer group from the Kafka broker(s)")
    @ApiResponse(responseCode = "502", description = "Unable to connect to Kafka broker(s) or connection was disconnected")
    @Tag(name = "consumer-groups")
    public Single<ConsumerGroupDescription> describeConsumerGroup(
            @Parameter(description="The consumer group ID to fetch details for") @NotNull String groupId
    ) {
        KafkaFuture<Map<String, ConsumerGroupDescription>> kafkaFuture = this.adminClient
                .describeConsumerGroups(Collections.singletonList(groupId))
                .all();

        return Single.fromFuture(kafkaFuture).map(groupMap -> groupMap.get(groupId));
    }

    @Get("/{groupId}/offsets")
    @Operation(summary = "Get offset detail", description = "Get detail about partitions and offsets for the specified consumer group")
    @ApiResponse(responseCode = "502", description = "Unable to connect to Kafka broker(s) or connection was disconnected")
    @Tag(name = "consumer_groups")
    public Single<Map<TopicPartition, OffsetAndMetadata>> offsets(String groupId) {
        KafkaFuture<Map<TopicPartition, OffsetAndMetadata>> kafkaFuture = this.adminClient
                .listConsumerGroupOffsets(groupId)
                .partitionsToOffsetAndMetadata();

        return Single.fromFuture(kafkaFuture);
    }
}