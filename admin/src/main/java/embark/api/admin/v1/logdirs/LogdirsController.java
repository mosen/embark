package embark.api.admin.v1.logdirs;

import io.micronaut.core.version.annotation.Version;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.annotation.QueryValue;
import io.reactivex.Single;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.kafka.clients.admin.AdminClient;
import org.apache.kafka.common.KafkaFuture;
import org.apache.kafka.common.requests.DescribeLogDirsResponse;

import javax.annotation.Nullable;
import javax.validation.constraints.NotNull;
import java.util.Collections;
import java.util.Map;

@Controller("${api.base-path:}/v1/logdirs")
public class LogdirsController {

    private final AdminClient adminClient;

    public LogdirsController(AdminClient adminClient) {
        this.adminClient = adminClient;
    }

    @Get("/{brokerId}")
    @Version("1")
    @Operation(summary = "Get a list of logdirs for the specified broker id", description = "Get a list of logdirs for the specified broker")
    @Tag(name = "logdirs")
    public Single<Map<String, DescribeLogDirsResponse.LogDirInfo>> describeBrokerLogdirs(
        @Parameter(description="The broker id") @QueryValue @NotNull int brokerId
    ) {
        KafkaFuture<Map<Integer, Map<String, DescribeLogDirsResponse.LogDirInfo>>> logDirs = this.adminClient.describeLogDirs(Collections.singletonList(brokerId)).all();
        return Single.fromFuture(logDirs).map(ld -> ld.get(brokerId));
    }
}