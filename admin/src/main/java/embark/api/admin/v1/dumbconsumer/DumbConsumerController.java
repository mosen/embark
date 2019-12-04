package embark.api.admin.v1.dumbconsumer;

import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.HttpStatus;

@Controller("/dumbConsumer")
public class DumbConsumerController {

    @Get("/")
    public HttpStatus index() {
        return HttpStatus.OK;
    }
}