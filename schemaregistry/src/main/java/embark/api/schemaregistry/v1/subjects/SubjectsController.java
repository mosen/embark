package embark.api.schemaregistry.v1.subjects;

import io.micronaut.core.version.annotation.Version;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.annotation.*;
import io.reactivex.Single;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import embark.api.schemaregistry.RegistryClient;
import embark.api.schemaregistry.jsonapi.JSONAPIEnvelopeDto;
import embark.api.schemaregistry.jsonapi.JSONAPIObjectDto;
import embark.api.schemaregistry.v1.schemas.SchemaAttrs;
import embark.api.schemaregistry.v1.schemas.SchemaDescriptionAttrs;

import java.util.List;
import java.util.stream.Collectors;

@Controller("${api.base-path:}/v1/subjects")
public class SubjectsController {

    private final RegistryClient client;

    public SubjectsController(RegistryClient client) {
        this.client = client;
    }

    @Get()
    @Version("1")
    @Operation(summary = "List subjects", description = "List subjects")
    @Tag(name = "subjects")
    public Single<HttpResponse<JSONAPIEnvelopeDto<List<JSONAPIObjectDto<SubjectAttrs>>>>> index() {
        return client.subjects().map(HttpResponse::body).map(names -> {
            return names.stream().map(name -> new JSONAPIObjectDto<>(new SubjectAttrs(name), "subjects", "")).collect(Collectors.toList());
        }).map(JSONAPIEnvelopeDto::new)
                .map(HttpResponse::ok);
    }

    @Get("/{subject}/versions")
    @Version("1")
    @Operation(summary = "Get subject versions", description = "Get subject versions")
    @Tag(name = "subjects")
    public Single<HttpResponse<List<Integer>>> getVersions(@PathVariable String subject) {
        return client.subjectVersions(subject);
    }

    @Delete("/{subject}")
    @Version("1")
    @Operation(summary = "Delete subject", description = "Delete a subject and associated compatibility level")
    @Tag(name = "subjects")
    public Single<HttpStatus> deleteSubject(@PathVariable String subject) {
        return client.deleteSubject(subject).map(HttpResponse::getStatus);
    }

    @Get("/{subject}/versions/{version}")
    @Version("1")
    @Operation(summary = "Get subject schema detail", description = "Get subject schema details indicated by version. Version can also be `latest`")
    @Tag(name = "subjects")
    public Single<HttpResponse<JSONAPIEnvelopeDto<JSONAPIObjectDto<SchemaDescriptionAttrs>>>> getSubjectSchemaVersion(@PathVariable String subject, @PathVariable String version) {
        return client.getSubjectVersion(subject, version)
                .map(r -> new JSONAPIObjectDto<SchemaDescriptionAttrs>(r.body(), "schemas", String.format("%d", r.body().id)))
                .map(JSONAPIEnvelopeDto::new)
                .map(HttpResponse::ok);
    }

    @Get("/{subject}/versions/{version}/schema")
    @Version("1")
    @Operation(summary = "Get subject schema value", description = "Get subject schema value only indicated by version. Version can also be `latest`")
    @Tag(name = "subjects")
    public Single<HttpResponse<String>> getSubjectSchemaVersionRaw(@PathVariable String subject, @PathVariable String version) {
        return client.getSubjectVersionSchema(subject, version);
    }

    @Post("/{subject}/versions")
    @Version("1")
    @Operation(summary = "Create new schema for subject", description = "Create new schema for subject")
    @Tag(name = "subjects")
    public Single<HttpResponse<JSONAPIEnvelopeDto<JSONAPIObjectDto<SchemaAttrs>>>> createSchema(@PathVariable String subject, @Body CreateSchemaDto schemaDto) {
        return client.createSchema(subject, schemaDto.schema).map(result -> {
            SchemaAttrs attrs = new SchemaAttrs();
            attrs.schema = schemaDto.schema;
            return new JSONAPIObjectDto<SchemaAttrs>(attrs, "schemas", String.format("%d", result.body().id));
        }).map(JSONAPIEnvelopeDto::new)
            .map(HttpResponse::created);
    }

    @Post("/{subject}")
    @Version("1")
    @Operation(summary = "Check schema exists for subject", description = "Check schema exists for subject")
    @Tag(name = "subjects")
    public Single<HttpResponse<JSONAPIEnvelopeDto<JSONAPIObjectDto<SchemaDescriptionAttrs>>>> schemaExists(@PathVariable String subject) {
        return client.schemaExists(subject)
                .map(result -> new JSONAPIObjectDto<>(result.body(), "schemas", "unknown"))
                .map(JSONAPIEnvelopeDto::new)
                .map(HttpResponse::ok);
    }

    @Delete("/{subject}/versions/{version}")
    @Version("1")
    @Operation(summary = "Delete specific schema version from subject", description = "Delete specific schema version from subject")
    @Tag(name = "subjects")
    public Single<HttpResponse<String>> deleteSchemaVersion(@PathVariable String subject, @PathVariable String version) {
        return client.deleteSchemaVersion(subject, version);
    }


}