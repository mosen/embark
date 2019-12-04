package embark.api.schemaregistry.v1.schemas;

import embark.api.schemaregistry.jsonapi.JSONAPIEnvelopeDto;
import io.micronaut.core.version.annotation.Version;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.PathVariable;
import io.reactivex.Single;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import embark.api.schemaregistry.RegistryClient;
import embark.api.schemaregistry.jsonapi.JSONAPIObjectDto;

@Controller("${api.base-path:}/v1/schemas")
public class SchemasController {

    private final RegistryClient client;

    public SchemasController(RegistryClient client) {
        this.client = client;
    }

    @Get("/{id}")
    @Version("1")
    @Operation(summary = "Get schema", description = "Get schema")
    @Tag(name = "schemas")
    public Single<HttpResponse<JSONAPIEnvelopeDto<JSONAPIObjectDto<SchemaAttrs>>>> getSchema(@PathVariable String id) {
        return this.client.schema(id)
                .map(r -> new JSONAPIObjectDto<>(r.body(), "schemas", id))
                .map(JSONAPIEnvelopeDto::new)
                .map(HttpResponse::ok);
    }
}