
export interface Resource<TAttributes> {
    type: string;
    id: string;
    attributes: TAttributes;
    relationships: any;
}

export interface ResourceId {
    type: string;
    id: string;
}

export interface JSONAPIError {
    id?: string;
    links?: any;
    status?: string;
    code?: string;
    title?: string;
    detail?: string;
    source?: any;
    meta?: any;
}

export interface Meta {
    [propName: string]: any;
}

export type Data<T> = Resource<T> | Resource<T>[];

export interface JSONAPIDocument<T, I = void> {
    data?: Data<T>;
    errors?: JSONAPIError[];
    meta?: Meta;
    jsonapi?: any;
    links?: any;
    included?: I;
}
