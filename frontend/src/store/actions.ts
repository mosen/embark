import Axios from "axios";
import {Action} from "vuex";
import {RootState} from "@/store";
import {TopicsResponseDto} from "@/store/topics/types";
import {ClusterNode, ClusterNodesResponseDto} from "@/store/types";

export const fetchConnectInfo: Action<RootState, RootState> = async ({state, commit }): Promise<void> => {
    commit('connectInfoRequested');
    try {
        const response = await Axios.get<TopicsResponseDto>(`${state.endpoints.connectApi}/v1/version`);
        commit('connectInfoReplace', response.data);
    } catch (e) {
        commit('connectInfoError', e);
    }
};

export const fetchRegistryInfo: Action<RootState, RootState> = async ({state, commit }): Promise<void> => {
    commit('registryInfoRequested');
    try {
        const response = await Axios.get<TopicsResponseDto>(`${state.endpoints.schemaRegistryApi}/v1/version`);
        commit('registryInfoReplace', response.data);
    } catch (e) {
        commit('registryInfoError', e);
    }
};


export const fetchClusterInfo: Action<RootState, RootState> = async ({state, commit }): Promise<void> => {
    commit('clusterInfoRequested');
    try {
        const response = await Axios.get<ClusterNode[]>(`${state.endpoints.adminApi}/v1/clusters/default/nodes`);
        commit('clusterInfoReplace', response.data);
    } catch (e) {
        commit('clusterInfoError', e);
    }
};
