
export type ConnectorsResponse = string[];

export interface ConnectorConfig {
    "connector.class": string;
    [name: string]: string;
}

export interface Connector {
    name: string;
    config: ConnectorConfig;
}

export interface ConnectorTask {
    connector: string;
    task: number;
}

export interface ConnectorResponse extends Connector {
    tasks: ConnectorTask[];
}

export interface ConnectorTaskStatus {
    id: number;
    state: string;
    worker_id: string;
    trace?: string;
}

export interface ConnectorStatusResponse {
    name: string;
    connector: {
        state: string;
        worker_id?: string;
    };
    tasks: ConnectorTaskStatus[];
}