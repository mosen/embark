import {Mutation} from "vuex";
import {ErrorMutation, SuccessMutation} from "@/store/mutations";
import {ConnectorsState} from "@/store/connectors/index";
import {ConnectorResponseDto, ConnectorsResponseDto, ConnectorStatusResponseDto} from "@/store/connectors/types";


export const connectorsRequested: Mutation<ConnectorsState> = (state): void => {
    state.loading = true;
    state.hasError = false;
    state.errorMessage = "";
};

export const connectorsError: ErrorMutation<ConnectorsState> = (state, payload: Error): void => {
    state.loading = false;
    state.hasError = true;
    state.errorMessage = payload.message;
};

export const connectorsReplace: SuccessMutation<ConnectorsState, ConnectorsResponseDto> = (state, payload): void => {
    state.data = payload.data;
    state.loading = false;
    state.hasError = false;
};

export const connectorRequested: Mutation<ConnectorsState> = (state): void => {
    state.loading = true;
};

export const connectorError: ErrorMutation<ConnectorsState> = (state, payload: Error): void => {
    state.loading = false;
    state.hasError = true;
    state.errorMessage = payload.message;
};

export const connectorReplace: SuccessMutation<ConnectorsState, ConnectorResponseDto> = (state, payload): void => {
    state.current = payload.data;
    state.loading = false;
    state.hasError = false;
};

export const connectorStatusReplace: SuccessMutation<ConnectorsState, ConnectorStatusResponseDto> = (state, payload): void => {
    state.currentStatus = payload.data;
    state.loading = false;
    state.hasError = false;
};

