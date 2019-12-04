package embark.api.schemaregistry.jsonapi;

import java.util.List;

/**
 * This class provides a simple shortcut for instantiating generics of the form:
 *
 * JSONAPIEnvelopeDto<List<JSONAPIObjectDto<MyEntity>>>
 */
public class JSONAPIObjectListDto<T> extends JSONAPIEnvelopeDto<List<JSONAPIObjectDto<T>>> {
  public JSONAPIObjectListDto() {}
}
