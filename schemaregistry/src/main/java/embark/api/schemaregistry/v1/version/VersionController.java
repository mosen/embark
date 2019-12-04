package embark.api.schemaregistry.v1.version;

import io.micronaut.context.annotation.Value;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.reactivex.Single;
import embark.api.schemaregistry.RegistryClient;
import embark.api.schemaregistry.dto.VersionInfoDto;

@Controller("${api.base-path:}/v1/version")
public class VersionController {

    @Value("${kafka.registry.url}")
    private String registryUrl;

    private final RegistryClient client;

    public VersionController(RegistryClient client) {
        this.client = client;
    }

    @Get()
    public Single<HttpResponse<VersionInfoDto>> version() {
        VersionInfoDto infoDto = new VersionInfoDto(registryUrl);
        return Single.just(HttpResponse.ok(infoDto));
    }
}