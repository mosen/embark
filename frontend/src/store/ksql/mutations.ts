import {Mutation} from "vuex";
import {ErrorMutation, SuccessMutation} from "@/store/mutations";
import {KSQLState} from "@/store/ksql/index";
import {KSQLServerInfo, KSQLStatementResult} from "@/store/ksql/types";

export const ksqlSubmit: Mutation<KSQLState> = (state): void => {
    state.loading = true;
};

export const ksqlError: ErrorMutation<KSQLState> = (state, payload: Error): void => {
    state.loading = false;
    console.error(payload);
};

export const ksqlResult: Mutation<KSQLState> = (state, payload: KSQLStatementResult[]): void => {
    state.results = payload;
    state.loading = false;
};

export const ksqlInfoRequest: Mutation<KSQLState> = (state) => {
    state.info.loading = true;
};

export const ksqlInfoError: Mutation<KSQLState> = (state, payload: Error) => {
    state.info.error = true;
    state.info.loading = false;
};

export const ksqlInfoResult: Mutation<KSQLState> = (state, payload: KSQLServerInfo) => {
    state.info.data = payload;
    state.info.loading = false;
    state.info.error = false;
};

export const updateQuery: Mutation<KSQLState> = (state, query: string) => {
    state.query = query;
};