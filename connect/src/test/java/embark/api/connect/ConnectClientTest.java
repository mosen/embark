package embark.api.connect;

import io.micronaut.context.ApplicationContext;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.HttpStatus;
import io.micronaut.runtime.server.EmbeddedServer;
import io.micronaut.test.annotation.MicronautTest;
import io.reactivex.Single;
import kafka.api.connect.dto.ConnectorPluginAttrs;
import org.junit.jupiter.api.Test;

import javax.inject.Inject;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@MicronautTest
public class ConnectClientTest {

  @Inject
  EmbeddedServer embeddedServer;

  @Test
  public void testConnectors() {
    try(ApplicationContext ctx = embeddedServer.getApplicationContext()) {
      ConnectClient client = ctx.getBean(ConnectClient.class);
      HttpResponse<List<String>> connectors = client.getConnectors().blockingGet();
      assertEquals(HttpStatus.OK, connectors.getStatus());
      assertNotNull(connectors.body());
    }
  }

  @Test
  public void testConnectorPlugins() {
    try(ApplicationContext ctx = embeddedServer.getApplicationContext()) {
      ConnectClient client = ctx.getBean(ConnectClient.class);
      HttpResponse<List<ConnectorPluginAttrs>> connectors = client.getConnectorPlugins().blockingGet();
      assertEquals(HttpStatus.OK, connectors.getStatus());
      assertNotNull(connectors.body());
      assertTrue(connectors.body().size() > 0);
    }
  }
}
