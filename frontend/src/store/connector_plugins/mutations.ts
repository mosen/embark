import {Mutation} from "vuex";
import {ErrorMutation, SuccessMutation} from "@/store/mutations";
import {ConnectorPluginsState} from "@/store/connector_plugins/index";
import {ConnectorPluginsResponse, ConnectorPluginValidationResult} from "@/store/connector_plugins/types";


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

export const validateConnectorPluginRequested: Mutation<ConnectorPluginsState> = (state): void => {
    state.loading = true;
};

export const validateConnectorPluginReplace: SuccessMutation<ConnectorPluginsState, ConnectorPluginValidationResult> = (state, payload): void => {
    state.loading = false;
    state.validation = payload.data;
};

export const validateConnectorPluginError: ErrorMutation<ConnectorPluginsState> = (state): void => {
    state.loading = false;
    state.hasError = true;
};