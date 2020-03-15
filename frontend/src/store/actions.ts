import Axios from "axios";
import {Action} from "vuex";
import {RootState} from "@/store";
import {ClusterNode} from "@/store/types";
import {GlobalConfiguration} from "@/store/subjects/types";
import {KSQLServerInfoResponse} from "@/store/ksql/types";

export const connectStatus: Action<RootState, RootState> = async ({state, commit }): Promise<void> => {
    commit('connectStatusLoading');
    try {
        const response = await Axios.get<any>(`${state.endpoints.connectApi}/`);
        commit('connectStatus', response.data);
    } catch (e) {
        commit('connectStatusError', { error: e });
    }
};

export const schemaRegistryStatus: Action<RootState, RootState> = async ({state, commit }): Promise<void> => {
    const url = `${state.endpoints.schemaRegistryApi}/config`;
    commit('schemaRegistryStatusLoading', { component: 'schemaRegistryStatus' });
    try {
        const response = await Axios.get<GlobalConfiguration>(url);
        commit('schemaRegistryStatus', response.data);
    } catch (e) {
        commit('schemaRegistryStatusError', { error: e });
    }
};


export const kafkaStatus: Action<RootState, RootState> = async ({state, commit }): Promise<void> => {
    commit('kafkaStatusLoading');
    try {
        const response = await Axios.get<ClusterNode[]>(`${state.endpoints.adminApi}/v1/clusters/default/nodes`);
        commit('kafkaStatus', response.data);
    } catch (e) {
        commit('kafkaStatusError', { error: e });
    }
};

export const ksqlStatus: Action<RootState, RootState> = async ({state, commit}): Promise<void> => {
    const url = `${state.endpoints.ksqlApi}/info`;
    commit('ksqlStatusLoading');
    try {
        const response = await Axios.get<KSQLServerInfoResponse>(url, {
            headers: { "Accept": "application/vnd.ksql.v1+json" },
        });
        commit('ksqlStatus', response.data);
    } catch (e) {
        commit('ksqlStatusError', { error: e });
    }
};
