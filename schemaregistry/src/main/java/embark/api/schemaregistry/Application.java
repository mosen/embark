package embark.api.schemaregistry;

import io.micronaut.runtime.Micronaut;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(
        info = @Info(
                title = "Embark API SchemaRegistry",
                version = "1.0",
                description = "Embark SchemaRegistry API Microservice"
        )
)
public class Application {

    public static void main(String[] args) {
        Micronaut.run(Application.class);
    }
}