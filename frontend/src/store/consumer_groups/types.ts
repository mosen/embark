import {JSONAPIDocument} from "@/jsonapi";
import {ClusterNode} from "@/store/types";

export enum ConsumerGroupState {
    Stable = "Stable",
    Dead = "Dead",
}

export interface ConsumerGroupAttr {
    coordinator: ClusterNode;
    groupId: string;
    isSimpleConsumerGroup: boolean;
    state: ConsumerGroupState;
}

export type ConsumerGroupsResponseDto = JSONAPIDocument<ConsumerGroupAttr>;

export interface Consumer {
    clientId: string;
    consumerId: string;
    host: string;
}

export interface ConsumerGroupDescription extends ConsumerGroupAttr {
    partitionAssignor: string;
    members: Consumer[];
}

export type ConsumerGroupDescriptionResponseDto = JSONAPIDocument<ConsumerGroupDescription>;

export interface ConsumerGroupOffset {
    partition: number;
    topic: string;
    offset: number;
}

export type ConsumerGroupOffsetsResponseDto = JSONAPIDocument<ConsumerGroupOffset>;
