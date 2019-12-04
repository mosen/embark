package embark.api.schemaregistry.jsonapi;

public class JSONAPICreateObjectDto<T> {
  public String type;
  public T attributes;

  public JSONAPICreateObjectDto() {}

  public JSONAPICreateObjectDto(T attributes, String type) {
    this.attributes = attributes;
    this.type = type;
  }
}
