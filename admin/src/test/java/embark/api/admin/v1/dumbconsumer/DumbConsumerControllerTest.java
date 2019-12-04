package embark.api.admin.v1.dumbconsumer;

import io.micronaut.context.ApplicationContext;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.client.RxHttpClient;
import io.micronaut.runtime.server.EmbeddedServer;
import io.micronaut.test.annotation.MicronautTest;

import org.junit.jupiter.api.Test;

import javax.inject.Inject;

import static org.junit.jupiter.api.Assertions.assertEquals;

@MicronautTest
public class DumbConsumerControllerTest {

    @Inject
    EmbeddedServer embeddedServer;

    @Test
    public void testIndex() throws Exception {
        try(RxHttpClient client = embeddedServer.getApplicationContext().createBean(RxHttpClient.class, embeddedServer.getURL())) {
            assertEquals(HttpStatus.OK, client.toBlocking().exchange("/dumbConsumer").status());
        }
    }
}
