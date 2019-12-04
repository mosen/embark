
export type KSQLSerializationTypes = "JSON" | "AVRO" | "DELIMITED";

export interface KSQLCommandStatus {
    status: "QUEUED" | "PARSING" | "EXECUTING" | "TERMINATED" | "SUCCESS" | "ERROR";
    message: string;
}

export interface KSQLBaseResult {
    statementText: string;
}

export interface CreateTerminateDropResult extends KSQLBaseResult {
    commandId: string;
    commandStatus: KSQLCommandStatus;
    commandSequenceNumber: number;
}

export interface KSQLStreamOrTable {
    name: string;
    topic: string;
    format: KSQLSerializationTypes;
}

export interface KSQLListStreamsResult extends KSQLBaseResult  {
    streams: KSQLStreamOrTable[];
}

export interface KSQLListTablesResult extends KSQLBaseResult {
    tables: KSQLStreamOrTable[];
}

export interface KSQLQuery {
    queryString: string;
    sinks: string;
    id: string;
}

export interface KSQLListQueriesResult extends KSQLBaseResult {
    queries: KSQLQuery[];
}

export interface KSQLListPropertiesResult extends KSQLBaseResult {
    properties: {
        [propName: string]: string;
    };
}

export interface KSQLField {
    name: string;
    schema: {
        type: "INTEGER" | "BIGINT" | "BOOLEAN" | "DOUBLE" | "STRING" | "ARRAY" | "MAP" | "STRUCT";
        memberSchema: any;
        fields: any[];
    };
}

export interface KSQLSourceDescription {
    name: string;
    readQueries: any[];
    writeQueries: any[];
    fields: KSQLField[];
    type: "STREAM" | "TABLE";
    key: string;
    timestamp: string;
    format: KSQLSerializationTypes;
    topic: string;
    extended: boolean;
    statistics: string;
    errorStats: string;
    replication?: number;
    partitions?: number;
}

export interface KSQLDescribeResult extends KSQLBaseResult {
    sourceDescription: KSQLSourceDescription;
}
//
// export interface KSQLExplainResult extends KSQLBaseResult {
//
// }


export type KSQLStatementResult = KSQLDescribeResult | KSQLSourceDescription | KSQLListPropertiesResult |
    KSQLListQueriesResult | KSQLListTablesResult | KSQLListStreamsResult | CreateTerminateDropResult;

export interface KSQLServerInfo {
    version: string;
    kafkaClusterId: string;
    ksqlServiceId: string;
}

export interface KSQLServerInfoDto {
    KsqlServerInfo: KSQLServerInfo;
}