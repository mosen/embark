package embark.api.connect.v1.version;

import io.micronaut.context.annotation.Value;
import io.micronaut.core.version.annotation.Version;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.reactivex.Single;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import embark.api.connect.ConnectClient;
import embark.api.connect.dto.ExtendedVersionInfo;
import embark.api.connect.dto.VersionInfo;

@Controller("${api.base-path:}/v1/version")
public class VersionController {

    private final ConnectClient client;

    @Value("${kafka.connect.url}")
    private String connectUrl;

    public VersionController(ConnectClient client) {
        this.client = client;
    }

    @Get()
    @Version("1")
    @Operation(summary = "Get Kafka Connect Version Information", description = "Get Kafka Connect Version Information")
    @Tag(name = "version")
    public Single<HttpResponse<ExtendedVersionInfo>> version() {
        return client.getVersion().map(r -> {
            VersionInfo info = r.body();
            assert info != null;
            return new ExtendedVersionInfo(info, connectUrl);
        }).map(HttpResponse::ok);
    }
}
