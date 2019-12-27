import {ClusterNode} from "@/store/types";

export enum ConsumerGroupState {
    Stable = "Stable",
    Dead = "Dead",
}

export interface ConsumerGroup {
    coordinator: ClusterNode;
    groupId: string;
    isSimpleConsumerGroup: boolean;
    state: ConsumerGroupState;
}

export interface Consumer {
    clientId: string;
    consumerId: string;
    host: string;
}

export interface ConsumerGroupDescription extends ConsumerGroup {
    partitionAssignor: string;
    members: Consumer[];
}


export interface ConsumerGroupOffset {
    partition: number;
    topic: string;
    offset: number;
}
