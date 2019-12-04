package embark.api.ksql;

import io.micronaut.http.HttpResponse;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.annotation.Body;
import io.micronaut.http.annotation.Header;
import io.micronaut.http.annotation.Post;
import io.micronaut.http.client.annotation.Client;
import io.micronaut.http.annotation.Get;
import io.reactivex.Single;
import embark.api.ksql.dto.CommandStatusResultDto;
import embark.api.ksql.dto.KSQLExecuteRequestDto;
import embark.api.ksql.dto.KSQLInfoDto;
import embark.api.ksql.dto.KSQLRestResultDto;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;

@Client("${kafka.ksql.url}")
@Header(name="Accept", value="application/vnd.ksql.v1+json")
public interface KSQLClient {

    @Get("/info")
    public Single<HttpResponse<KSQLInfoDto>> info();

    @Post("/ksql")
    public Single<HttpResponse<KSQLRestResultDto[]>> ksql(@Body @Valid KSQLExecuteRequestDto requestDto);

    @Post("/query")
    public Single<HttpResponse<KSQLRestResultDto[]>> query(@Body @Valid KSQLExecuteRequestDto requestDto);

    @Get("/status/{commandId}")
    public Single<HttpResponse<CommandStatusResultDto>> status(@NotBlank String commandId);

//    @Post("/terminate")
//    public Single<HttpStatus> terminateCluster();
}