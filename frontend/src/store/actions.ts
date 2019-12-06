import Axios from "axios";
import {Action} from "vuex";
import {RootState} from "@/store";
import {TopicsResponseDto} from "@/store/topics/types";
import {ClusterNode} from "@/store/types";
import {GlobalConfiguration} from "@/store/subjects/types";
import {KSQLServerInfoResponse} from "@/store/ksql/types";

export const fetchConnectInfo: Action<RootState, RootState> = async ({state, commit }): Promise<void> => {
    commit('connectInfoRequested');
    try {
        const response = await Axios.get<TopicsResponseDto>(`${state.endpoints.connectApi}/`);
        commit('connectInfoReplace', response.data);
    } catch (e) {
        commit('connectInfoError', e);
    }
};

export const fetchRegistryInfo: Action<RootState, RootState> = async ({state, commit }): Promise<void> => {
    commit('registryInfoRequested');
    try {
        const response = await Axios.get<GlobalConfiguration>(`${state.endpoints.schemaRegistryApi}/config`);
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

export const fetchKsqlInfo: Action<RootState, RootState> = async ({state, commit}): Promise<void> => {
    commit('ksqlInfoRequested');
    try {
        const response = await Axios.get<KSQLServerInfoResponse>(`${state.endpoints.ksqlApi}/info`, {
            headers: { "Accept": "application/vnd.ksql.v1+json" },
        });
        commit('ksqlInfoReplace', response.data);
    } catch (e) {
        commit('ksqlInfoError', e);
    }
};