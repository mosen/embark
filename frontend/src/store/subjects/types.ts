import {JSONAPIDocument} from "@/jsonapi";


export interface SubjectAttr {
    name: string;

}

export type SubjectResponseDto = JSONAPIDocument<SubjectAttr>;

export type SubjectsResponseDto = JSONAPIDocument<{ name: string }>;

export interface SchemaAttr {
    schema: string;
}

export interface SchemaDetailAttr extends SchemaAttr {
    subject: string;
    version: number;
    id: number;
}

export type SchemaDetailResponseDto = JSONAPIDocument<SchemaDetailAttr>;
