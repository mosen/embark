package embark.api.connect;

import embark.api.connect.dto.*;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.*;
import io.micronaut.http.client.annotation.Client;
import io.micronaut.http.HttpStatus;
import io.reactivex.Single;
import embark.api.connect.dto.*;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import java.util.List;
import java.util.Map;

@Client("${kafka.connect.url}")
public interface ConnectClient {

    @Get()
    Single<HttpResponse<VersionInfo>> getVersion();

    @Get("/connectors")
    Single<HttpResponse<List<String>>> getConnectors();

    @Post("/connectors")
    Single<HttpResponse<ConnectorDetailAttrs>> createConnector(@Body @Valid ConnectorAttrs connector);

    @Get("/connectors/{name}")
    Single<HttpResponse<ConnectorDetailAttrs>> getConnector(@NotBlank String name);

    @Get("/connectors/{name}/config")
    Single<HttpResponse<Map<String, String>>> getConnectorConfig(@NotBlank String name);

    @Put("/connectors/{name}/config")
    Single<HttpResponse<ConnectorDetailAttrs>> upsertConnectorConfig(@NotBlank String name, @Body Map<String, String> config);

    @Get("/connectors/{name}/status")
    Single<HttpResponse<ConnectorStatusDto>> getConnectorStatus(@NotBlank String name);

    @Post("/connectors/{name}/restart")
    Single<HttpStatus> restartConnector(@NotBlank String name);

    @Put("/connectors/{name}/pause")
    Single<HttpStatus> pauseConnector(@NotBlank String name);

    @Put("/connectors/{name}/resume")
    Single<HttpStatus> resumeConnector(@NotBlank String name);

    @Delete("/connectors/{name}/")
    Single<HttpStatus> deleteConnector(@NotBlank String name);

    @Get("/connectors/{name}/tasks")
    Single<HttpResponse<List<TaskDetailAttrs>>> getTasks(@NotBlank String name);

    @Get("/connectors/{name}/tasks/{taskId}/status")
    Single<HttpResponse<TaskStatusDto>> getTaskStatus(@NotBlank String name, @NotBlank String taskId);

    @Post("/connectors/{name}/tasks/{taskId}/restart")
    Single<HttpStatus> restartTask(@NotBlank String name, @NotBlank String taskId);

    // Plugins

    @Get("/connector-plugins")
    Single<HttpResponse<List<ConnectorPluginAttrs>>> getConnectorPlugins();

    @Put("/connector-plugins/{name}/config/validate")
    Single<HttpResponse<String>> validateConnectorPluginConfig(@NotBlank String name, @Body Map<String, String> config);

}