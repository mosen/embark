import Axios from "axios";
import {Action} from "vuex";
import {RootState} from "@/store";
import {ClusterNode} from "@/store/types";
import {GlobalConfiguration} from "@/store/subjects/types";
import {KSQLServerInfoResponse} from "@/store/ksql/types";

export const connectStatus: Action<RootState, RootState> = async ({state, commit }): Promise<void> => {
    commit('loading', { component: 'connectStatus' });
    try {
        const response = await Axios.get<any>(`${state.endpoints.connectApi}/`);
        commit('connectStatus', response.data);
    } catch (e) {
        commit('error', { component: 'connectStatus', error: e });
    }

    commit('loading', { component: 'connectStatus', loading: false });
};

export const schemaRegistryStatus: Action<RootState, RootState> = async ({state, commit }): Promise<void> => {
    commit('loading', { component: 'schemaRegistryStatus' });
    try {
        const response = await Axios.get<GlobalConfiguration>(`${state.endpoints.schemaRegistryApi}/config`);
        commit('schemaRegistryStatus', response.data);
    } catch (e) {
        commit('error', { component: 'schemaRegistryStatus', error: e });
    }

    commit('loading', { component: 'schemaRegistryStatus', loading: false });
};


export const kafkaStatus: Action<RootState, RootState> = async ({state, commit }): Promise<void> => {
    commit('loading', { component: 'kafkaStatus' });
    try {
        const response = await Axios.get<ClusterNode[]>(`${state.endpoints.adminApi}/v1/clusters/default/nodes`);
        commit('kafkaStatus', response.data);
    } catch (e) {
        commit('error', { component: 'kafkaStatus', error: e });
    }

    commit('loading', { component: 'kafkaStatus', loading: false });
};

export const ksqlStatus: Action<RootState, RootState> = async ({state, commit}): Promise<void> => {
    commit('loading', { component: 'ksqlStatus' });
    try {
        const response = await Axios.get<KSQLServerInfoResponse>(`${state.endpoints.ksqlApi}/info`, {
            headers: { "Accept": "application/vnd.ksql.v1+json" },
        });
        commit('ksqlStatus', response.data);
    } catch (e) {
        commit('error', { component: 'ksqlStatus', error: e });
    }

    commit('loading', { component: 'ksqlStatus', loading: false });
};
