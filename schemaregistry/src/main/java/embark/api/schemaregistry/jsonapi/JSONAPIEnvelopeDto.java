package embark.api.schemaregistry.jsonapi;

public class JSONAPIEnvelopeDto<T> {
  public T data;
//  public Map<String, String> meta;
//  public String jsonapi = "1.0";
  // included

  public JSONAPIEnvelopeDto() {}

  public JSONAPIEnvelopeDto(T data) {
    this.data = data;
  }

//  public static JSONAPIEnvelopeDto<TObj> from<TObj>(TObj obj) {
//
//  }
}
