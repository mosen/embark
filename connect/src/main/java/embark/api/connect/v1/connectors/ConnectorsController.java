package embark.api.connect.v1.connectors;

import embark.api.connect.ConnectClient;
import embark.api.connect.dto.*;
import embark.api.connect.v1.jsonapi.JSONAPIEnvelopeDto;
import embark.api.connect.v1.jsonapi.JSONAPIObjectDto;
import io.micronaut.core.version.annotation.Version;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.*;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.client.exceptions.HttpClientResponseException;
import io.reactivex.Single;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import embark.api.connect.dto.*;
import embark.api.connect.v1.jsonapi.*;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Controller("${api.base-path:}/v1/connectors")
public class ConnectorsController {

    private final ConnectClient client;

    public ConnectorsController(ConnectClient client) {
        this.client = client;
    }

    @Get()
    @Version("1")
    @Operation(summary = "List configured connectors", description = "List all currently configured connectors")
    @Tag(name = "connectors")
    public Single<HttpResponse<JSONAPIEnvelopeDto<List<JSONAPIObjectDto<ConnectorAttrs>>>>> index() {
        return client.getConnectors().map(HttpResponse::body).map(names -> {
            return names.stream().map(name -> new JSONAPIObjectDto<>(new ConnectorAttrs(name), "connectors", "")).collect(Collectors.toList());
        }).map(JSONAPIEnvelopeDto::new)
          .map(HttpResponse::ok);
    }

    @Post()
    @Version("1")
    @Operation(summary = "Create a new connector configuration", description = "Create a new connector configuration")
    @Tag(name = "connectors")
    public Single<HttpResponse<JSONAPIEnvelopeDto<JSONAPIObjectDto<ConnectorDetailAttrs>>>> createConnector(@Body @Valid ConnectorAttrs connector) {
        return client.createConnector(connector)
                .map(HttpResponse::body)
                .map(attrs -> new JSONAPIObjectDto<>(attrs, "connectors", connector.name))
                .map(JSONAPIEnvelopeDto::new)
                .map(HttpResponse::created);
    }

    @Get("/{name}")
    @Version("1")
    @Operation(summary = "Get connector detail", description = "Get detailed information about a connector")
    @Tag(name = "connectors")
    public Single<HttpResponse<JSONAPIEnvelopeDto<JSONAPIObjectDto<ConnectorDetailAttrs>>>> getConnector(@NotBlank String name) {
      return client.getConnector(name)
              .map(HttpResponse::body)
              .map(attrs -> new JSONAPIObjectDto<>(attrs, "connectors", name))
              .map(JSONAPIEnvelopeDto::new)
              .map(HttpResponse::ok);
    }

    @Get("/{name}/config")
    @Version("1")
    @Operation(summary = "Get connector config", description = "Get current configuration of the specified connector")
    @Tag(name = "connectors")
    public Single<HttpResponse<JSONAPIEnvelopeDto<JSONAPIObjectDto<Map<String, String>>>>> getConnectorConfig(@NotBlank String name) {
        return client.getConnectorConfig(name)
                .map(HttpResponse::body)
                .map(config -> new JSONAPIObjectDto<>(config, "connector_configs", name))
                .map(JSONAPIEnvelopeDto::new)
                .map(HttpResponse::ok);
    }

    @Put("/{name}/config")
    @Version("1")
    @Operation(summary = "Create or update connector config", description = "Create or update connector config")
    @Tag(name = "connectors")
    public Single<HttpResponse<JSONAPIEnvelopeDto<JSONAPIObjectDto<ConnectorDetailAttrs>>>> upsertConnectorConfig(@NotBlank String name, @Body Map<String, String> config) {
        return client.upsertConnectorConfig(name, config)
                .map(HttpResponse::body)
                .map(updated -> new JSONAPIObjectDto<>(updated, "connector_configs", name))
                .map(JSONAPIEnvelopeDto::new)
                .map(HttpResponse::ok);
    }

    @Get("/{name}/status")
    @Version("1")
    @Operation(summary = "Get connector status", description = "Get connector status")
    @Tag(name = "connectors")
    public Single<HttpResponse<JSONAPIEnvelopeDto<JSONAPIObjectDto<ConnectorStatusDto>>>> getConnectorStatus(@NotBlank String name) {
        return client.getConnectorStatus(name)
                .map(HttpResponse::body)
                .map(status -> new JSONAPIObjectDto<>(status, "connector_statuses", name))
                .map(JSONAPIEnvelopeDto::new)
                .map(HttpResponse::ok);
    }

    @Post("/{name}/restart")
    @Version("1")
    @Operation(summary = "Restart connector", description = "Restart connector")
    @ApiResponse(responseCode = "204", description = "Successfully restarted connector")
    @Tag(name = "connectors")
    public Single<HttpStatus> restartConnector(@NotBlank String name) {
        return client.restartConnector(name);
    }

    @Put("/{name}/pause")
    @Version("1")
    @Operation(summary = "Pause connector", description = "Pause connector")
    @ApiResponse(responseCode = "202", description = "Successfully paused connector (or already paused)")
    @Tag(name = "connectors")
    public Single<HttpStatus> pauseConnector(@NotBlank String name) {
        return client.pauseConnector(name);
    }

    @Put("/{name}/resume")
    @Version("1")
    @Operation(summary = "Resume a paused connector", description = "Resume a paused connector")
    @ApiResponse(responseCode = "202", description = "Successfully resumed connector (or already running)")
    @Tag(name = "connectors")
    public Single<HttpStatus> resumeConnector(@NotBlank String name) {
        return client.resumeConnector(name);
    }

    @Delete("/{name}")
    @Version("1")
    @Operation(summary = "Delete a connector", description = "Delete a connector")
    @ApiResponse(responseCode = "404", description = "Connector already did not exist or was previously deleted")
    @ApiResponse(responseCode = "204", description = "Successfully deleted the connector (no further content)")
    @Tag(name = "connectors")
    public Single<HttpStatus> deleteConnector(@NotBlank String name) {
        try {
            return client.deleteConnector(name);
        } catch (HttpClientResponseException e) {
            return Single.just(HttpStatus.BAD_REQUEST);
//            switch (e.getStatus().getCode()) {
//
//            }
        }
    }

    @Get("{name}/tasks")
    @Version("1")
    @Operation(summary = "Get connector tasks", description = "Get a list of tasks running for this connector")
    @Tag(name = "connectors")
    public Single<HttpResponse<List<TaskDetailAttrs>>> getTasks(@NotBlank String name) {
        return client.getTasks(name);
    }

    @Get("{name}/tasks/{taskId}/status")
    @Version("1")
    @Operation(summary = "Get task status", description = "Get status of a task running for a connector")
    @Tag(name = "connectors")
    public Single<HttpResponse<TaskStatusDto>> getTaskStatus(@NotBlank String name, @NotBlank String taskId) {
        return client.getTaskStatus(name, taskId);
    }

    @Post("{name}/tasks/{taskId}/restart")
    @Version("1")
    @Operation(summary = "Restart a task", description = "Restart a specific task by id")
    @ApiResponse(responseCode = "204", description = "Successfully restarted task")
    @Tag(name = "connectors")
    public Single<HttpStatus> restartTask(@NotBlank String name, @NotBlank String taskId) {
        return client.restartTask(name, taskId);
    }
}