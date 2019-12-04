package embark.api.admin.v1.consumergroups;

import io.micronaut.core.type.Argument;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.client.RxHttpClient;
import io.micronaut.runtime.server.EmbeddedServer;
import io.micronaut.test.annotation.MicronautTest;
import embark.api.admin.v1.jsonapi.JSONAPIEnvelopeDto;
import embark.api.admin.v1.jsonapi.JSONAPIObjectDto;
import embark.api.admin.v1.jsonapi.JSONAPIObjectListDto;
import org.junit.jupiter.api.Test;

import javax.inject.Inject;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@MicronautTest
public class ConsumerGroupsControllerTest {

    @Inject
    EmbeddedServer embeddedServer;

    @Test
    public void testIndex() throws Exception {
        try (RxHttpClient client = embeddedServer.getApplicationContext().createBean(RxHttpClient.class, embeddedServer.getURL())) {
//            HttpResponse<JSONAPITopicListingResponse> response = client.toBlocking().exchange(
//                    HttpRequest.GET("/api/v1/topics"), JSONAPITopicListingResponse.class);
            HttpResponse<JSONAPIConsumerGroupListingResponse> response =
                    client.toBlocking().exchange(
                            HttpRequest.GET("/api/v1/consumer_groups"),
                            JSONAPIConsumerGroupListingResponse.class);
            assertEquals(HttpStatus.OK, response.status());
            assertNotNull(response.body());

            response.body().data.stream()
                    .forEach(jsonApi -> {
                        assertEquals(jsonApi.type, "consumer_groups");
                    });
        }
    }

    @Test
    public void testDescribe() throws Exception {
        try (RxHttpClient client = embeddedServer.getApplicationContext().createBean(RxHttpClient.class, embeddedServer.getURL())) {
            HttpResponse<JSONAPIDescribeConsumerGroupResponse> response =
                    client.toBlocking().exchange(
                            HttpRequest.GET("/api/v1/consumer_groups/_confluent-controlcenter-5-2-1-1"),
                            JSONAPIDescribeConsumerGroupResponse.class);
            assertEquals(HttpStatus.OK, response.status());
            assertNotNull(response.body());

            JSONAPIObjectDto<ConsumerGroupDescriptionDto> jsonApiObject = response.body().data;
            assertEquals(jsonApiObject.type, "consumer_groups");
        }
    }


    @Test
    public void testOffsets() throws Exception {
        try (RxHttpClient client = embeddedServer.getApplicationContext().createBean(RxHttpClient.class, embeddedServer.getURL())) {
            HttpResponse<JSONAPITopicPartitionOffsetsResponse> response = client.toBlocking().exchange(
                    HttpRequest.GET("/api/v1/consumer_groups/_confluent-controlcenter-5-2-1-1/offsets"),
                    JSONAPITopicPartitionOffsetsResponse.class);
            assertEquals(HttpStatus.OK, response.status());
            assertNotNull(response.body());

            response.body().data.stream()
                    .forEach(jsonApi -> {
                        assertEquals(jsonApi.type, "consumer_groups");
                    });
        }
    }


}
