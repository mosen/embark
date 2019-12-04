package embark.api.admin;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import embark.api.admin.kafka.mixin.*;
import io.micronaut.context.event.BeanCreatedEvent;
import io.micronaut.context.event.BeanCreatedEventListener;
import io.micronaut.runtime.Micronaut;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import org.apache.kafka.clients.admin.*;
import org.apache.kafka.clients.consumer.OffsetAndMetadata;
import org.apache.kafka.common.Node;
import org.apache.kafka.common.TopicPartitionInfo;
import org.apache.kafka.common.acl.AccessControlEntry;
import org.apache.kafka.common.acl.AclBinding;
import org.apache.kafka.common.resource.ResourcePattern;

import javax.inject.Singleton;

@OpenAPIDefinition(
        info = @Info(
                title = "Embark API Admin",
                version = "1.0",
                description = "Embark Admin API Microservice",
                license = @License(name = "GPLv3", url = "https://www.gnu.org/licenses/gpl-3.0.en.html")
        )
)
public class Application {
  public static void main(String[] args) {
    Micronaut.run(Application.class);
  }

  @Singleton
  static class ObjectMapperBeanEventListener implements BeanCreatedEventListener<ObjectMapper> {

    @Override
    public ObjectMapper onCreated(BeanCreatedEvent<ObjectMapper> event) {
      final ObjectMapper mapper = event.getBean();

      mapper.addMixIn(OffsetAndMetadata.class, OffsetAndMetadataMixin.class);
      mapper.addMixIn(ConsumerGroupDescription.class, ConsumerGroupDescriptionMixin.class);
      mapper.addMixIn(ConsumerGroupListing.class, ConsumerGroupListingMixin.class);
      mapper.addMixIn(ConfigEntry.class, ConfigEntryMixin.class);
      mapper.addMixIn(NewTopic.class, NewTopicMixin.class);
      mapper.addMixIn(Node.class, NodeMixin.class);
      mapper.addMixIn(TopicPartitionInfo.class, TopicPartitionInfoMixin.class);
      mapper.addMixIn(TopicDescription.class, TopicDescriptionMixin.class);
      mapper.addMixIn(TopicListing.class, TopicListingMixin.class);
      mapper.addMixIn(ResourcePattern.class, ResourcePatternMixin.class);
      mapper.addMixIn(AccessControlEntry.class, AccessControlEntryMixin.class);
      mapper.addMixIn(AclBinding.class, AclBindingMixin.class);

      return mapper;
    }
  }
}