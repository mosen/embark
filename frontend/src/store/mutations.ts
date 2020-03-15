import {AxiosResponse} from "axios";
import {Mutation} from "vuex";
import {RootState} from "@/store/index";
import {ClusterNode, VersionResponse} from "@/store/types";
import {CompatibilityLevel} from "@/store/subjects/types";

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

export const connectStatus: Mutation<RootState> = (state, payload: VersionResponse): void => {
    state.connect.loading = false;
    state.connect.version = payload.version;
    state.connect.commit = payload.commit;
    state.connect.kafka_cluster_id = payload.kafka_cluster_id;
    state.connect.url = payload.connectUrl;
};

export const schemaRegistryStatus: Mutation<RootState> = (state, payload: CompatibilityLevel): void => {
    state.registry.loading = false;
    state.registry.compatibility = payload;
};

export const kafkaStatus: Mutation<RootState> = (state, payload: ClusterNode[]): void => {
    state.cluster.loading = false;
    state.cluster.nodes = payload.map((d: ClusterNode) => `${d.host}:${d.port}`);
};

// export const ksqlStatus: Mutation<RootState> = (state, payload: KSQLServerInfoResponse): void => {
// };

export interface LoadingMutationPayload {
    component: string;
    loading?: boolean;
}

export const loading: Mutation<RootState> = (state, { component, loading }: LoadingMutationPayload): void => {
    state.loading[component] = loading ?? true;
};

export interface ErrorMutationPayload {
    component: string;
    error?: Error;
}

export const error: Mutation<RootState> = (state, { component, error }: ErrorMutationPayload): void => {
    state.errors[component] = error ?? null;
};