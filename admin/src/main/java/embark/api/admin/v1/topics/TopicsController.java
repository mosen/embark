package embark.api.admin.v1.topics;

import io.micronaut.context.annotation.Value;
import io.micronaut.http.HttpResponse;
import io.reactivex.Completable;
import io.micronaut.core.version.annotation.Version;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.annotation.*;
import io.micronaut.validation.Validated;
import io.reactivex.Single;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.kafka.clients.admin.*;
import org.apache.kafka.common.KafkaFuture;
import org.apache.kafka.common.config.ConfigResource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.Nullable;
import javax.validation.constraints.NotNull;
import java.util.*;
import java.util.concurrent.Callable;

@Validated
@Controller("${api.base-path:}/v1/topics")
public class TopicsController {

  private static final Logger log = LoggerFactory.getLogger(TopicsController.class);
  private final AdminClient adminClient;

  @Value("${kafka.topics.exclude}")
  private List<String> excludedTopics;

  public TopicsController(AdminClient adminClient) {
    this.adminClient = adminClient;
  }

  @Get(uri = "/{?includeInternal,includeUnderscore}")
  @Version("1")
  @Operation(summary = "Get a list of topics", description = "Gets a list of topics from the Kafka broker(s)")
  @ApiResponse(responseCode = "502", description = "Unable to connect to Kafka broker(s) or connection was disconnected")
  @Tag(name = "topics")
  public Single<Collection<TopicListing>> listTopics(
          @Parameter(description="Whether to include internal topics") @QueryValue @Nullable Boolean includeInternal,
          @Parameter(description="Whether to include underscore prefixed topics usually reserved for Confluent products") @QueryValue @Nullable Boolean includeUnderscore
  ) {
    ListTopicsOptions options = new ListTopicsOptions();

    if (includeInternal != null && includeInternal) {
      options.listInternal(true);
    }

    KafkaFuture<Collection<TopicListing>> kafkaFuture = this.adminClient
            .listTopics(options)
            .listings();

    if (includeUnderscore != null && includeUnderscore) {
      return Single.fromFuture(kafkaFuture).map(ArrayList::new);
    } else {
      return Single.fromFuture(kafkaFuture).map(ArrayList::new);
    }
  }

  @Get(uri = "/{name}")
  @Version("1")
  @Operation(summary = "Get detailed information about a topic", description = "Retrieves partitions and replicas information")
  @Tag(name = "topics")
  public Single<TopicDescription> describeTopic(
          @Parameter(description="Topic name") @NotNull String name
  ) {
    KafkaFuture<Map<String, TopicDescription>> kafkaFuture = this.adminClient
            .describeTopics(Collections.singletonList(name))
            .all();

    return Single.fromFuture(kafkaFuture).map(topicMap -> topicMap.get(name));
  }

  @Post()
  @Version("1")
  @Operation(summary = "Create a topic", description = "Create a Kafka topic")
  @ApiResponse(responseCode = "201", description = "Topic was created (no further information)")
  @ApiResponse(responseCode = "400", description = "Topic failed creation")
  @ApiResponse(responseCode = "500", description = "Unhandled exception creating topic")
  @Tag(name = "topics")
  public Single<HttpResponse<TopicDescription>> createTopic(
          @Parameter(description="The topic to create") @Body NewTopic createTopic
  ) {
    KafkaFuture<Void> kafkaFuture = this.adminClient
            .createTopics(Collections.singletonList(createTopic))
            .all();

    Callable<Single<Map<String, TopicDescription>>> describeTopic = () -> Single.fromFuture(this.adminClient
            .describeTopics(Collections.singletonList(createTopic.name()))
            .all());

    return Completable.fromFuture(kafkaFuture)
            .andThen(Single.defer(describeTopic))
            .map(topicMap -> {
              TopicDescription description = topicMap.get(createTopic.name());
              return HttpResponse.created(description);
            });
  }

  @Delete(uri = "/{name}")
  @Version("1")
  @Operation(summary = "Delete a topic", description = "Delete a Kafka topic")
  @ApiResponse(responseCode = "404", description = "Topic already did not exist")
  @ApiResponse(responseCode = "204", description = "Successfully deleted the topic (no further content)")
  @Tag(name = "topics")
  public Single<HttpStatus> deleteTopic(
          @Parameter(description="Name of the topic to delete") String name
  ) {
    KafkaFuture<Void> kafkaFuture = this.adminClient
            .deleteTopics(Collections.singletonList(name))
            .all();

    return Completable.fromFuture(kafkaFuture)
            .andThen(Single.just(HttpStatus.NO_CONTENT));
  }

  @Get("/{name}/configuration")
  @Operation(summary = "Get the configuration of a topic", description = "This method gets the configuration of a topic")
  @Tag(name = "topics")
  public Single<Collection<ConfigEntry>> getTopicConfiguration(
          @Parameter(description="Name of the topic to fetch configuration for") String name
  ) {
    ConfigResource lookupObject = new ConfigResource(ConfigResource.Type.TOPIC, name);
    KafkaFuture<Map<ConfigResource, Config>> kafkaFuture = this.adminClient
            .describeConfigs(Collections.singletonList(lookupObject))
            .all();

    return Single.fromFuture(kafkaFuture).map(v -> {
      Config topicConfig = v.get(lookupObject);
      return topicConfig.entries();
    });
  }
}