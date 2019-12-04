package embark.api.connect;

import io.micronaut.runtime.Micronaut;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;

@OpenAPIDefinition(
        info = @Info(
                title = "Embark API Connect",
                version = "1.0",
                description = "Embark Connect API Microservice",
                license = @License(name = "GPLv3", url = "https://www.gnu.org/licenses/gpl-3.0.en.html")
        )
)
public class Application {
    public static void main(String[] args) {
        Micronaut.run(Application.class);
    }
}
