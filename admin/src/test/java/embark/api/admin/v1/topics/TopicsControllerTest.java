package embark.api.admin.v1.topics;

import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.client.RxHttpClient;
import io.micronaut.runtime.server.EmbeddedServer;
import io.micronaut.test.annotation.MicronautTest;
import embark.api.admin.util.MediaType;
import embark.api.admin.v1.jsonapi.JSONAPICreateObjectDto;
import embark.api.admin.v1.jsonapi.JSONAPIEnvelopeDto;
import embark.api.admin.v1.jsonapi.JSONAPIObjectDto;
import org.junit.jupiter.api.Test;

import javax.inject.Inject;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@MicronautTest
public class TopicsControllerTest {

  @Inject
  EmbeddedServer embeddedServer;

//  @Test
//  public void testListTopics() throws Exception {
//    try(RxHttpClient client = embeddedServer.getApplicationContext().createBean(RxHttpClient.class, embeddedServer.getURL())) {
//      HttpResponse<JSONAPITopicListingResponse> response = client.toBlocking().exchange(
//              HttpRequest.GET("/api/v1/topics"), JSONAPITopicListingResponse.class);
//
//      assertEquals(HttpStatus.OK, response.status());
//      assertEquals(MediaType.JSON_API, response.getContentType().get().toString());
//      assertNotNull(response.body());
//
//      response.body().data.stream()
//              .forEach(jsonApi -> {
//                assertEquals(jsonApi.type, "topics");
//                assertNotNull(jsonApi.attributes.name);
//              });
//    }
//  }
//
//  @Test
//  public void testListTopicsWithInternalTopics() throws Exception {
//    try(RxHttpClient client = embeddedServer.getApplicationContext().createBean(RxHttpClient.class, embeddedServer.getURL())) {
//      HttpResponse<JSONAPITopicListingResponse> response = client.toBlocking().exchange(
//              HttpRequest.GET("/api/v1/topics?includeInternal=true"), JSONAPITopicListingResponse.class);
//
//      assertEquals(HttpStatus.OK, response.status());
//      assertEquals(MediaType.JSON_API, response.getContentType().get().toString());
//      assertNotNull(response.body());
//
//      // At least one topic should be marked internal
//      assertTrue(response.body().data.stream()
//              .anyMatch(jsonApi -> jsonApi.attributes.isInternal));
//    }
//  }
//
//  @Test
//  public void testDescribe() throws Exception {
//    try(RxHttpClient client = embeddedServer.getApplicationContext().createBean(RxHttpClient.class, embeddedServer.getURL())) {
//      HttpResponse<JSONAPIDescribeTopicResponse> response = client.toBlocking().exchange(
//              HttpRequest.GET("/api/v1/topics/__consumer_offsets"), JSONAPIDescribeTopicResponse.class);
//
//      assertEquals(HttpStatus.OK, response.status());
//      assertEquals(MediaType.JSON_API, response.getContentType().get().toString());
//      assertNotNull(response.body());
//
//      assertEquals(response.body().data.type, "topics");
//    }
//  }
//
//  @Test
//  public void testCreate() throws Exception {
//    try(RxHttpClient client = embeddedServer.getApplicationContext().createBean(RxHttpClient.class, embeddedServer.getURL())) {
//      CreateTopicDto dto = new CreateTopicDto();
//      dto.name = "unit-test-topic";
//      dto.numPartitions = 1;
//      dto.replicationFactor = 1;
//
//      JSONAPICreateObjectDto<CreateTopicDto> jsonApiObject = new JSONAPICreateObjectDto<>();
//      jsonApiObject.type = "topics";
//      jsonApiObject.attributes = dto;
//
//      JSONAPIEnvelopeDto<JSONAPICreateObjectDto<CreateTopicDto>> jsonApiEnvelope = new JSONAPIEnvelopeDto<>();
//      jsonApiEnvelope.data = jsonApiObject;
//
//      HttpRequest req = HttpRequest.POST("/api/v1/topics", jsonApiEnvelope);
//
//      HttpResponse<JSONAPIDescribeTopicResponse> response = client.toBlocking().exchange(req, JSONAPIDescribeTopicResponse.class);
//      assertEquals(HttpStatus.CREATED, response.status());
//      assertEquals(MediaType.JSON_API, response.getContentType().get().toString());
//      assertNotNull(response.body());
//      assertEquals(response.body().data.type, "topics");
//    }
//  }
//
//  @Test
//  public void testDelete() throws Exception {
//    try(RxHttpClient client = embeddedServer.getApplicationContext().createBean(RxHttpClient.class, embeddedServer.getURL())) {
//      HttpResponse<Void> response = client.toBlocking().exchange(HttpRequest.DELETE("/api/v1/topics/unit-test-topic"));
//
//      assertEquals(response.getStatus(), HttpStatus.NO_CONTENT);
//    }
//  }
//
//  @Test
//  public void testConfigurationIndex() throws Exception {
//    try(RxHttpClient client = embeddedServer.getApplicationContext().createBean(RxHttpClient.class, embeddedServer.getURL())) {
//      HttpResponse<JSONAPITopicConfigurationResponse> response = client.toBlocking().exchange(
//              "/api/v1/topics/__consumer_offsets/configuration", JSONAPITopicConfigurationResponse.class);
//      assertEquals(HttpStatus.OK, response.status());
//      assertNotNull(response.body());
//      assertEquals(response.body().data.type, "topic_configurations");
//    }
//  }
}
