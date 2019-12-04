import {AxiosResponse} from "axios";
import {Mutation} from "vuex";
import {RootState} from "@/store/index";
import {ClusterNode, ClusterNodesResponseDto, VersionResponseDto} from "@/store/types";

// Standard type definition for an exception handling mutation which sets an error on the state tree.
export type ErrorMutation<S> = (state: S, payload: Error) => any;

// Standard Axios Success Response mutation
export type SuccessMutation<S, AR> = (state: S, payload: AxiosResponse<AR>) => any;


export const setSnackbarVisible = (state, visible: boolean = true): void => {
    state.snackbar.open = visible;
};

export const setSnackbarText = (state, text: string): void => {
    state.snackbar.text = text;
};

export const connectInfoRequested: Mutation<RootState> = (state): void => {
    state.connect.loading = true;
};

export const connectInfoReplace: Mutation<RootState> = (state, payload: VersionResponseDto): void => {
    state.connect.loading = false;
    state.connect.version = payload.version;
    state.connect.commit = payload.commit;
    state.connect.kafka_cluster_id = payload.kafka_cluster_id;
    state.connect.url = payload.connectUrl;
};

export const connectInfoError: Mutation<RootState> = (state, err): void => {
    state.connect.loading = false;
    state.connect.error = true;
    console.log(err);
};

export const registryInfoRequested: Mutation<RootState> = (state): void => {
    state.registry.loading = true;
};

export const registryInfoReplace: Mutation<RootState> = (state, payload: VersionResponseDto): void => {
    state.registry.loading = false;
    state.registry.url = payload.registryUrl;
};

export const registryInfoError: Mutation<RootState> = (state, err): void => {
    state.registry.loading = false;
    state.registry.error = true;
    console.log(err);
};

export const clusterInfoRequested: Mutation<RootState> = (state): void => {
    state.cluster.loading = true;
};

export const clusterInfoReplace: Mutation<RootState> = (state, payload: ClusterNode[]): void => {
    state.cluster.loading = false;
    state.cluster.nodes = payload.map((d: ClusterNode) => `${d.host}:${d.port}`);
};

export const clusterInfoError: Mutation<RootState> = (state, err): void => {
    state.cluster.error = true;
    console.log(err);
};
