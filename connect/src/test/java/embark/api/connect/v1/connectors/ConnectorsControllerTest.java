package embark.api.connect.v1.connectors;

import io.micronaut.context.ApplicationContext;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.client.RxHttpClient;
import io.micronaut.runtime.server.EmbeddedServer;
import io.micronaut.test.annotation.MicronautTest;

import kafka.api.connect.dto.ConnectorDetailAttrs;
import kafka.api.connect.dto.ConnectorPluginAttrs;
import org.junit.jupiter.api.Test;

import javax.inject.Inject;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@MicronautTest
public class ConnectorsControllerTest {

    @Inject
    EmbeddedServer embeddedServer;

    @Test
    public void testIndex() throws Exception {
        try(RxHttpClient client = embeddedServer.getApplicationContext().createBean(RxHttpClient.class, embeddedServer.getURL())) {
            HttpResponse<List<ConnectorPluginAttrs>> res = client.toBlocking().exchange("/api/v1/connectors");

            assertEquals(HttpStatus.OK, res.status());
        }
    }

    @Test
    public void testCreate() throws Exception {
        try(RxHttpClient client = embeddedServer.getApplicationContext().createBean(RxHttpClient.class, embeddedServer.getURL())) {
            HttpResponse<ConnectorDetailAttrs> res = client.toBlocking().exchange(HttpRequest.POST("/api/v1/connectors", "something"));

            assertEquals(HttpStatus.OK, res.status());
        }
    }
}
