
export interface Subject {
    name: string;
}

export interface Schema {
    schema: string;
}

export interface SchemaDetail extends Schema {
    subject: string;
    version: number;
    id: number;
}

export enum CompatibilityLevel {
    BACKWARD = "BACKWARD",
    BACKWARD_TRANSITIVE = "BACKWARD_TRANSITIVE",
    FORWARD = "FORWARD",
    FORWARD_TRANSITIVE = "FORWARD_TRANSITIVE",
    FULL = "FULL",
    FULL_TRANSITIVE = "FULL_TRANSITIVE",
    NONE = "NONE",
}

export interface GlobalConfiguration {
    compatibilityLevel: CompatibilityLevel;
}