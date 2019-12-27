import {Module} from "vuex";
import {RootState} from "@/store";
import * as actions from "./actions";
import * as mutations from "./mutations";
import {ConnectorResponse, ConnectorsResponse, ConnectorStatusResponse} from "./types";

export interface ConnectorsState {
    current: ConnectorResponse | null;
    currentStatus: ConnectorStatusResponse | null;
    // configuration?: TopicConfigurationResponseDto;
    data: ConnectorsResponse | null;
    loading: boolean;
    hasError: boolean;
    errorMessage?: string;
}

export const ConnectorsModule: Module<ConnectorsState, RootState> = {
    state: {
        current: null,
        currentStatus: null,
        // configuration: {},
        data: null,
        loading: false,
        hasError: false,
        errorMessage: undefined,
    },
    actions,
    mutations,
};