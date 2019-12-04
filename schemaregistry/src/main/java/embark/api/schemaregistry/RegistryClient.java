package embark.api.schemaregistry;

import embark.api.schemaregistry.v1.schemas.SchemaDescriptionAttrs;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.*;
import io.micronaut.http.client.annotation.Client;
import io.reactivex.Single;
import embark.api.schemaregistry.dto.CreateSchemaResponseDto;
import embark.api.schemaregistry.v1.schemas.SchemaAttrs;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Client("${kafka.registry.url}")
@Header(name="Accept", value="application/vnd.schemaregistry.v1+json, application/vnd.schemaregistry+json, application/json")
public interface RegistryClient {

    @Get(value = "/schemas/ids/{id}")
    public Single<HttpResponse<SchemaAttrs>> schema(@NotBlank String id);

    @Get(value = "/subjects", consumes = MediaType.SCHEMA_REGISTRY_JSON_V1)
    public Single<HttpResponse<List<String>>> subjects();

    @Get(value = "/subjects/{subject}/versions", consumes = MediaType.SCHEMA_REGISTRY_JSON_V1)
    public Single<HttpResponse<List<Integer>>> subjectVersions(@NotBlank String subject);

    @Delete(value = "/subjects/{subject}", consumes = MediaType.SCHEMA_REGISTRY_JSON_V1)
    public Single<HttpResponse<List<Integer>>> deleteSubject(@NotBlank String subject);

    @Get(value = "/subjects/{subject}/versions/{versionId}", consumes = MediaType.SCHEMA_REGISTRY_JSON_V1)
    public Single<HttpResponse<SchemaDescriptionAttrs>> getSubjectVersion(@NotBlank String subject, @NotBlank String versionId);

    @Get(value = "/subjects/{subject}/versions/{versionId}/schema", consumes = MediaType.SCHEMA_REGISTRY_JSON_V1)
    public Single<HttpResponse<String>> getSubjectVersionSchema(@NotBlank String subject, @NotBlank String versionId);

    /**
     * @param subject String The subject name to create a new schema under
     * @param schema String The schema, which has been serialised to a JSON string and escaped
     * @return A JSON body containing only the ID of the created schema eg. {"id":1}
     */
    @Post(value = "/subjects/{subject}/versions", consumes = MediaType.SCHEMA_REGISTRY_JSON_V1)
    public Single<HttpResponse<CreateSchemaResponseDto>> createSchema(@NotBlank String subject, @NotBlank String schema);

    @Post(value = "/subjects/{subject}", consumes = MediaType.SCHEMA_REGISTRY_JSON_V1)
    public Single<HttpResponse<SchemaDescriptionAttrs>> schemaExists(@NotBlank String subject);

    @Delete(value = "/subjects/{subject}/versions/{versionId}", consumes = MediaType.SCHEMA_REGISTRY_JSON_V1)
    public Single<HttpResponse<String>> deleteSchemaVersion(@NotBlank String subject, @NotBlank String versionId);

//    @Post(value = "/compatibility/subjects/{subject}/versions/{versionId}")
//    public HttpResponse<String> checkCompatibilityWith(@NotBlank String subject, @NotBlank String versionId, @Body @Valid AvroSchema schema);

    @Get(value = "/config", consumes = MediaType.SCHEMA_REGISTRY_JSON_V1)
    public Single<HttpResponse<String>> getConfig();

//    @Put(value = "/config", consumes = MediaType.SCHEMA_REGISTRY_JSON_V1)
//    public HttpResponse<String> updateConfig(@Body @Valid SubjectConfiguration config);

    @Get(value = "/config/{subject}", consumes = MediaType.SCHEMA_REGISTRY_JSON_V1)
    public Single<HttpResponse<String>> subjectConfig(@NotBlank String subject);

    //    @Put(value = "/config/{subject}", consumes = MediaType.SCHEMA_REGISTRY_JSON_V1)
//    public HttpResponse<String> updateSubjectConfig(@Body @Valid SubjectConfiguration config);


}
