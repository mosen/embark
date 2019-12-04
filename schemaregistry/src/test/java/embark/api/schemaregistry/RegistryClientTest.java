package embark.api.schemaregistry;

import io.micronaut.context.ApplicationContext;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.client.RxHttpClient;
import io.micronaut.runtime.server.EmbeddedServer;
import io.micronaut.test.annotation.MicronautTest;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import javax.inject.Inject;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@MicronautTest
public class RegistryClientTest {

  @Inject
  EmbeddedServer embeddedServer;

  private static String schema = "";

  @BeforeAll
  public static void setUp() {
    schema = "{\n" +
            "    \"type\": \"record\",\n" +
            "    \"namespace\": \"com.example\",\n" +
            "    \"name\": \"Customer\",\n" +
            "    \"doc\": \"Avro Schema for our Customer\",\n" +
            "    \"fields\": [{\n" +
            "            \"name\": \"first_name\",\n" +
            "            \"type\": \"string\",\n" +
            "            \"doc\": \"First Name of Customer\"\n" +
            "        }]}";
  }

  @Test
  public void testSubjects() {
    try(ApplicationContext ctx = embeddedServer.getApplicationContext()) {
      RegistryClient client = ctx.getBean(RegistryClient.class);
      HttpResponse<List<String>> subjects = client.subjects().blockingGet();
      assertNotNull(subjects.body());
    }
  }

  @Test
  public void testCreateSchema() {
    try(ApplicationContext ctx = embeddedServer.getApplicationContext()) {
      RegistryClient client = ctx.getBean(RegistryClient.class);
      HttpResponse<String> status = client.createSchema("test-fixture-schema1", schema).blockingGet();
      assertNotNull(status.body());
      assertEquals(status.code(), 200);
    }
  }
}
