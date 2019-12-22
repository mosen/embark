import {Module} from "vuex";
import {RootState} from "@/store";
import * as actions from "./actions";
import * as mutations from "./mutations";
import {ConnectorPluginsResponse, ConnectorPluginValidationResult} from "./types";

export interface ConnectorPluginsState {
    data: ConnectorPluginsResponse | null;
    validation: ConnectorPluginValidationResult | null;
    loading: boolean;
    hasError: boolean;
    errorMessage?: string;
}

export const ConnectorPluginsModule: Module<ConnectorPluginsState, RootState> = {
    state: {
        data: null,
        validation: null,
        loading: false,
        hasError: false,
        errorMessage: undefined,
    },
    actions,
    mutations,
};