package embark.api.admin.v1.acls;

import embark.api.admin.util.MediaType;
import embark.api.admin.v1.jsonapi.JSONAPIEnvelopeDto;
import embark.api.admin.v1.jsonapi.JSONAPIObjectDto;
import embark.api.admin.v1.jsonapi.JSONAPIObjectListDto;
import embark.api.admin.v1.topics.JSONAPIDescribeTopicResponse;
import io.micronaut.context.ApplicationContext;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.client.RxHttpClient;
import io.micronaut.runtime.server.EmbeddedServer;
import io.micronaut.test.annotation.MicronautTest;

import org.junit.jupiter.api.Test;

import javax.inject.Inject;

import java.util.Collections;

import static org.junit.jupiter.api.Assertions.assertEquals;

@MicronautTest
public class AclsControllerTest {

  @Inject
  EmbeddedServer embeddedServer;

  @Test
  public void testCreateAcls() throws Exception {
    try(RxHttpClient client = embeddedServer.getApplicationContext().createBean(RxHttpClient.class, embeddedServer.getURL())) {
      AclBindingDto binding = new AclBindingDto();
      AccessControlEntryDto ace = new AccessControlEntryDto();
      ace.setHost("*");
      ace.setOperation("ALL");
      ace.setPermissionType("ALLOW");
      ace.setPrincipal("User:foo");
      ace.setUnknown(false);
      binding.setEntry(ace);

      ResourcePatternDto rp = new ResourcePatternDto();
      rp.setName("foo");
      rp.setPatternType("ALL");
      rp.setResourceType("CLUSTER");
      binding.setPattern(rp);

      JSONAPIObjectListDto<AclBindingDto> envelope = new JSONAPIObjectListDto<>();
      envelope.data = Collections.singletonList(new JSONAPIObjectDto<>(binding, "acls", ""));

      HttpRequest req = HttpRequest.POST("/api/v1/acls", envelope).contentType(MediaType.JSON_API);
      HttpResponse response = client.toBlocking().exchange(req, HttpResponse.class);
      assertEquals(HttpStatus.CREATED, response.status());
    }
  }
}
