import {AxiosResponse} from "axios";
import {Mutation} from "vuex";
import {RootState} from "@/store/index";
import {ClusterNode, VersionResponse} from "@/store/types";
import {CompatibilityLevel} from "@/store/subjects/types";
import {KSQLServerInfoResponse} from "@/store/ksql/types";

export interface ErrorPayload {
    error: Error | null;
}

export interface LoadingPayload {
    loading?: boolean;
}

// Standard type definition for an exception handling mutation which sets an error on the state tree.
export type ErrorMutation<S> = (state: S, payload: Error) => void;

// Standard Axios Success Response mutation
export type SuccessMutation<S, AR> = (state: S, payload: AxiosResponse<AR>) => void;

export const navDrawer: Mutation<RootState> = (state, payload: boolean) => {
    state.drawer.open = payload;
};

export const setSnackbarVisible: Mutation<RootState> = (state, visible = true): void => {
    state.snackbar.open = visible;
};

export const setSnackbarText: Mutation<RootState> = (state, text: string): void => {
    state.snackbar.text = text;
};


export const connectStatusLoading: Mutation<RootState> = (state, payload: LoadingPayload): void => {
    state.connect.loading = payload.loading ?? true;
};

export const connectStatus: Mutation<RootState> = (state, payload: VersionResponse): void => {
    state.connect.loading = false;
    state.connect.version = payload.version;
    state.connect.commit = payload.commit;

    state.connect.kafka_cluster_id = payload.kafka_cluster_id;
    state.connect.url = payload.connectUrl;
};

export const connectStatusError: Mutation<RootState> = (state, payload: ErrorPayload): void => {
    state.connect.error = payload.error;
    state.connect.loading = false;
};


export const schemaRegistryStatusLoading: Mutation<RootState> = (state, payload: LoadingPayload): void => {
    state.ksql.loading = payload.loading ?? true;
};

export const schemaRegistryStatus: Mutation<RootState> = (state, payload: CompatibilityLevel): void => {
    state.registry.loading = false;
    state.registry.compatibility = payload;
};

export const schemaRegistryStatusError: Mutation<RootState> = (state, payload: ErrorPayload): void => {
    state.registry.error = payload.error;
    state.registry.loading = false;
};

export const kafkaStatusLoading: Mutation<RootState> = (state, payload: LoadingPayload): void => {
    state.cluster.loading = payload.loading ?? true;
};

export const kafkaStatus: Mutation<RootState> = (state, payload: ClusterNode[]): void => {
    state.cluster.loading = false;
    state.cluster.nodes = payload.map((d: ClusterNode) => `${d.host}:${d.port}`);
};

export const kafkaStatusError: Mutation<RootState> = (state, payload: ErrorPayload): void => {
    state.cluster.error = payload.error;
    state.cluster.loading = false;
};

export interface KSQLStatusLoadingPayload extends LoadingPayload {
    url?: string;
}

export const ksqlStatusLoading: Mutation<RootState> = (state, payload: KSQLStatusLoadingPayload): void => {
    state.ksql.loading = payload.loading ?? true;
};

export const ksqlStatus: Mutation<RootState> = (state, payload: KSQLServerInfoResponse): void => {
    state.ksql.info = payload.KsqlServerInfo;
    state.ksql.loading = false;
    state.ksql.error = null;
};

export const ksqlStatusError: Mutation<RootState> = (state, payload: ErrorPayload): void => {
    state.ksql.error = payload.error;
    state.ksql.loading = false;
};
