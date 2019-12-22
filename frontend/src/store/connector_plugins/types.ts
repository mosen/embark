
export interface ConnectorPlugin {
    class: string;
    type: "source" | "sink";
    version: string | null;
}

export type ConnectorPluginsResponse = ConnectorPlugin[];

export enum ConfigFieldType {
    Class = 'CLASS',
    Integer = 'INT',
    String = 'STRING',
    Long = 'LONG',
    Boolean = 'BOOLEAN',
}

export enum ConfigFieldWidth {
    None = 'NONE',
    Short = 'SHORT',
    Medium = 'MEDIUM',
    Long = 'LONG',
}

export interface ConfigDefinition {
    name: string;
    type: ConfigFieldType;
    required: boolean;
    default_value: any | null;
    importance: string;
    documentation: string;
    group: string;
    width: ConfigFieldWidth;
    display_name: string;
    dependents: string[];
    order: number;
}

export interface ValueValidationResult {
    name: string;
    value: any | null;
    recommended_values: string[];
    errors: string[];
    visible: boolean;
}

export interface ConnectorPluginValidationItem {
    definition: ConfigDefinition;
    value: ValueValidationResult;
}

export interface ConnectorPluginValidationResult {
    name: string;
    error_count: number;
    groups: string[];
    configs: ConnectorPluginValidationItem[];
}
