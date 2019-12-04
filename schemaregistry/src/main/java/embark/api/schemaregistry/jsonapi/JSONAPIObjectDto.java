package embark.api.schemaregistry.jsonapi;

public class JSONAPIObjectDto<T> {
  public String type;
  public String id;
  public T attributes;

  public JSONAPIObjectDto() {}

  public JSONAPIObjectDto(T attributes, String type, String id) {
    this.attributes = attributes;
    this.type = type;
    this.id = id;
  }
}
