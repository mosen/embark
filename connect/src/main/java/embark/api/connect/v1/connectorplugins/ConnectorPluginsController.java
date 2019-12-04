package embark.api.connect.v1.connectorplugins;

import embark.api.connect.ConnectClient;
import embark.api.connect.v1.jsonapi.JSONAPIEnvelopeDto;
import embark.api.connect.v1.jsonapi.JSONAPIObjectDto;
import io.micronaut.core.version.annotation.Version;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.reactivex.Single;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import embark.api.connect.dto.ConnectorPluginAttrs;

import java.util.List;
import java.util.stream.Collectors;

@Controller("${api.base-path:}/v1/connector-plugins")
public class ConnectorPluginsController {

    private final ConnectClient client;

    public ConnectorPluginsController(ConnectClient client) {
        this.client = client;
    }

    @Get()
    @Version("1")
    @Operation(summary = "List available plugins", description = "List all available Kafka Connect plugins")
    @Tag(name = "connector-plugins")
    public Single<HttpResponse<JSONAPIEnvelopeDto<List<JSONAPIObjectDto<ConnectorPluginAttrs>>>>> index() {
        return client.getConnectorPlugins().map(HttpResponse::body).map(body -> {
            return body.stream()
                    .map(attrs -> new JSONAPIObjectDto<>(attrs, "connector_plugins", ""))
                    .collect(Collectors.toList());
        }).map(JSONAPIEnvelopeDto::new)
          .map(HttpResponse::ok);
    }
}