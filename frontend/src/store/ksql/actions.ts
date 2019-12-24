import {Action} from "vuex";
import {RootState} from "@/store";
import {KSQLState} from "@/store/ksql/index";
import Axios from "axios";
import {KSQLServerInfo, KSQLServerInfoResponse, KSQLStatementResult} from "@/store/ksql/types";


export const ksql: Action<KSQLState, RootState> = async ({ commit, rootState }, statement: string): Promise<void> => {
    commit('ksqlSubmit', { statement });
    try {
        const response = await Axios.post<KSQLStatementResult[]>(`${rootState.endpoints.ksqlApi}/ksql`, {
            ksql: statement,
        });
        commit('ksqlResult', response.data);
    } catch (e) {
        commit('ksqlError', e);
    }
};

export const ksqlInfo: Action<KSQLState, RootState> = async({ commit, rootState }): Promise<void> => {
    commit('ksqlInfoRequest');
    try {
        const response = await Axios.get<KSQLServerInfoResponse>(`${rootState.endpoints.ksqlApi}/info`, {
            headers: { "Accept": "application/vnd.ksql.v1+json" },
        });
        commit('ksqlInfoResult', response.data);
    } catch (e) {
        commit('ksqlInfoError', e);
    }
};
