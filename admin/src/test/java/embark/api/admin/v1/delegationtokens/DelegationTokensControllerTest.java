package embark.api.admin.v1.delegationtokens;

import io.micronaut.context.ApplicationContext;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.client.RxHttpClient;
import io.micronaut.runtime.server.EmbeddedServer;
import io.micronaut.test.annotation.MicronautTest;

import org.junit.jupiter.api.Test;

import javax.inject.Inject;

import java.net.URI;

import static org.junit.jupiter.api.Assertions.assertEquals;

@MicronautTest
public class DelegationTokensControllerTest {

  @Inject
  EmbeddedServer embeddedServer;

  @Test
  public void testCreate() throws Exception {
    try(RxHttpClient client = embeddedServer.getApplicationContext().createBean(RxHttpClient.class, embeddedServer.getURL())) {
      HttpRequest request = HttpRequest.POST("/api/v1/tokens/create", "");
      HttpResponse response = client.toBlocking().exchange(request);
      assertEquals(HttpStatus.OK, response.status());
    }
  }
}
