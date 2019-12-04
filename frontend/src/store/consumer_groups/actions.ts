import {Action} from "vuex";
import Axios from "axios";
import {ConsumerGroupsState} from "@/store/consumer_groups/index";
import {RootState} from "@/store";
import {ConsumerGroupOffsetsResponseDto, ConsumerGroupsResponseDto} from "@/store/consumer_groups/types";

type ConsumerGroupAction = Action<ConsumerGroupsState, RootState>;

export const consumerGroups: ConsumerGroupAction = async ({commit, rootState}): Promise<void> => {
    commit('consumerGroupsRequested', { name });
    try {
        const response = await Axios.get<ConsumerGroupsResponseDto>(`${rootState.endpoints.adminApi}/v1/consumer-groups`);
        commit('consumerGroupsReplace', response.data);
    } catch (e) {
        commit('consumerGroupsError', e);
    }
};

export const consumerGroup: ConsumerGroupAction = async ({commit, rootState}, name: string): Promise<void> => {
    commit('consumerGroupRequested', { name });
    try {
        const response = await Axios.get<ConsumerGroupsResponseDto>(`${rootState.endpoints.adminApi}/v1/consumer-groups/${ name }`);
        commit('consumerGroupReplace', response.data);
    } catch (e) {
        commit('consumerGroupError', e);
    }
};

export const consumerGroupOffsets: ConsumerGroupAction = async ({commit, rootState}, name: string): Promise<void> => {
    commit('consumerGroupOffsetsRequested', { name });
    try {
        const response = await Axios.get<ConsumerGroupOffsetsResponseDto>(`${rootState.endpoints.adminApi}/v1/consumer-groups/${ name }/offsets`);
        commit('consumerGroupOffsetsReplace', response.data);
    } catch (e) {
        commit('consumerGroupOffsetsError', e);
    }
};
