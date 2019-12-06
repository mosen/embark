
export interface ConnectorPlugin {
    class: string;
    type: "source" | "sink";
    version: string | null;
}

export type ConnectorPluginsResponse = ConnectorPlugin[];
