import {Mutation} from "vuex";
import {ErrorMutation, SuccessMutation} from "@/store/mutations";
import {ConnectorPluginsState} from "@/store/connector_plugins/index";
import {ConnectorPluginsResponse} from "@/store/connector_plugins/types";


export const connectorPluginsRequested: Mutation<ConnectorPluginsState> = (state): void => {
    state.loading = true;
    state.hasError = false;
    state.errorMessage = "";
};

export const connectorPluginsError: ErrorMutation<ConnectorPluginsState> = (state, payload: Error): void => {
    state.loading = false;
    state.hasError = true;
    state.errorMessage = payload.message;
};

export const connectorPluginsReplace: SuccessMutation<ConnectorPluginsState, ConnectorPluginsResponse> = (state, payload): void => {
    state.data = payload.data;
    state.loading = false;
    state.hasError = false;
};
