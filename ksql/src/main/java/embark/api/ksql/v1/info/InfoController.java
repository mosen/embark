package embark.api.ksql.v1.info;

import embark.api.ksql.KSQLClient;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.reactivex.Single;
import embark.api.ksql.dto.KSQLInfoDto;

@Controller("${api.base-path:}/v1/info")
public class InfoController {

    private final KSQLClient client;

    public InfoController(KSQLClient client) {
        this.client = client;
    }

    @Get()
    public Single<HttpResponse<KSQLInfoDto>> info() {
        return client.info();
    }
}