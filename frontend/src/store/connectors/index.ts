import {Module} from "vuex";
import {RootState} from "@/store";
import * as actions from "./actions";
import * as mutations from "./mutations";
import {ConnectorResponseDto, ConnectorsResponseDto, ConnectorStatusResponseDto} from "./types";

export interface ConnectorsState {
    current?: ConnectorResponseDto;
    currentStatus?: ConnectorStatusResponseDto;
    // configuration?: TopicConfigurationResponseDto;
    data?: ConnectorsResponseDto;
    loading: boolean;
    hasError: boolean;
    errorMessage?: string;
}

export const ConnectorsModule: Module<ConnectorsState, RootState> = {
    state: {
        current: undefined,
        currentStatus: undefined,
        // configuration: {},
        data: undefined,
        loading: false,
        hasError: false,
        errorMessage: undefined,
    },
    actions,
    mutations,
};