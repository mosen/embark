import {Module} from "vuex";
import {RootState} from "@/store";
import * as actions from "./actions";
import * as mutations from "./mutations";
import {ConnectorPluginsResponse} from "./types";

export interface ConnectorPluginsState {
    data?: ConnectorPluginsResponse;
    loading: boolean;
    hasError: boolean;
    errorMessage?: string;
}

export const ConnectorPluginsModule: Module<ConnectorPluginsState, RootState> = {
    state: {
        data: undefined,
        loading: false,
        hasError: false,
        errorMessage: undefined,
    },
    actions,
    mutations,
};