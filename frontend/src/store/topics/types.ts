import {JSONAPIDocument} from "@/jsonapi";

export interface TopicListing {
    internal: boolean;
    name: string;
}


export interface Node {
    id: number;
    host: string;
    rack: string;
    port: number;
}

export interface TopicPartition {
    id: number;
    inSyncReplicas: Node[];
    replicas: Node[];
    leader: Node;
}

export interface TopicDescription extends TopicListing {
    partitions: TopicPartition[];
}

export interface NewTopic {
    name: string;
    numPartitions: number;
    replicationFactor: number;
}
