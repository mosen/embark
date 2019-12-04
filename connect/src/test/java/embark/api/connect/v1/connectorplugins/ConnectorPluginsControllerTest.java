package embark.api.connect.v1.connectorplugins;

import io.micronaut.http.HttpResponse;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.client.RxHttpClient;
import io.micronaut.runtime.server.EmbeddedServer;
import io.micronaut.test.annotation.MicronautTest;

import kafka.api.connect.dto.ConnectorPluginAttrs;
import org.junit.jupiter.api.Test;

import javax.inject.Inject;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@MicronautTest
public class ConnectorPluginsControllerTest {

    @Inject
    EmbeddedServer embeddedServer;

    @Test
    public void testIndex() throws Exception {
        try(RxHttpClient client = embeddedServer.getApplicationContext().createBean(RxHttpClient.class, embeddedServer.getURL())) {

            HttpResponse<List<ConnectorPluginAttrs>> res = client.toBlocking().exchange("/api/v1/connector-plugins");

            assertEquals(HttpStatus.OK, res.status());
            assertTrue(res.getBody().isPresent());

            List<ConnectorPluginAttrs> plugins = res.body();
            assertEquals(plugins.size(), 10);
        }
    }
}
