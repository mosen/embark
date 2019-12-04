import {JSONAPIDocument} from "@/jsonapi";

export interface ConnectorTask {
    connector: string;
    task: number;
}

export interface ConnectorAttr {
    name: string;
    config: { [key: string]: string };
    tasks: ConnectorTask[];
}

export type ConnectorResponseDto = JSONAPIDocument<ConnectorAttr>;

export type ConnectorsResponseDto = JSONAPIDocument<{ name: string }>;

export interface ConnectorTaskStatus {
    id: number;
    state: string;
}

export interface ConnectorStatusAttr {
    name: string;
    connector: { state: string };
    tasks: ConnectorTaskStatus[];
}

export type ConnectorStatusResponseDto = JSONAPIDocument<ConnectorStatusAttr>;
