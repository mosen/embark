package embark.api.schemaregistry.v1.config;

import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.HttpStatus;

@Controller("/config")
public class ConfigController {

    @Get("/")
    public HttpStatus index() {
        return HttpStatus.OK;
    }
}