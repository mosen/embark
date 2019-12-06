export interface VersionResponse {
    version: string;
    commit: string;
    kafka_cluster_id: string;
    connectUrl: string;
}

export interface ClusterNode {
    id: number;
    host: string;
    rack: string;
    port: number;
}

export interface ConfigEntry {
    name: string;
    value: string;
    default: boolean;
    source: string | 'STATIC_BROKER_CONFIG' | 'DEFAULT_CONFIG';
    isReadOnly: boolean;
    isSensitive: boolean;
}
