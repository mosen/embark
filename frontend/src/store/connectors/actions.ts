import {Action} from "vuex";
import {RootState} from "@/store";
import Axios from "axios";
import {ConnectorsState} from "@/store/connectors/index";
import {
    ConnectorResponse,
    ConnectorsResponse, ConnectorStatusResponse,
} from "@/store/connectors/types";

type ConnectorAction = Action<ConnectorsState, RootState>;

export const connectors: ConnectorAction = async ({commit, rootState}): Promise<void> => {
    commit('connectorsRequested', { name });
    try {
        const response = await Axios.get<ConnectorsResponse>(`${rootState.endpoints.connectApi}/connectors`);
        commit('connectorsReplace', response.data);
    } catch (e) {
        commit('connectorsError', e);
    }
};

export const connector: ConnectorAction = async ({commit, rootState}, name: string): Promise<void> => {
    commit('connectorRequested', { name });
    try {
        const response = await Axios.get<ConnectorResponse>(`${rootState.endpoints.connectApi}/connectors/${ name }`);
        commit('connectorReplace', response.data);
    } catch (e) {
        commit('connectorError', e);
    }
};

export const connectorStatus: ConnectorAction = async ({commit, rootState}, name: string): Promise<void> => {
    commit('connectorStatusRequested', { name });
    try {
        const response = await Axios.get<ConnectorStatusResponse>(`${rootState.endpoints.connectApi}/connectors/${ name }/status`);
        commit('connectorStatusReplace', response.data);
    } catch (e) {
        commit('connectorStatusError', e);
    }
};

export const pauseConnector: ConnectorAction = async ({commit, rootState}, name: string): Promise<void> => {
    try {
        const response = await Axios.put<void>(`${rootState.endpoints.connectApi}/connectors/${ name }/pause`);
        commit('connectorPaused', response.data);
    } catch (e) {
        commit('connectorPauseError', e);
    }
};

export const resumeConnector: ConnectorAction = async ({commit, rootState}, name: string): Promise<void> => {
    try {
        const response = await Axios.put<void>(`${rootState.endpoints.connectApi}/connectors/${ name }/resume`);
        commit('connectorResumed', response.data);
    } catch (e) {
        commit('connectorResumeError', e);
    }
};

export const restartConnector: ConnectorAction = async ({commit, rootState}, name: string): Promise<void> => {
    try {
        const response = await Axios.post<void>(`${rootState.endpoints.connectApi}/connectors/${ name }/restart`);
        commit('connectorRestarted', response.data);
    } catch (e) {
        commit('connectorRestartError', e);
    }
};

export const connectorConfig: ConnectorAction = async ({ commit, rootState }, className: string): Promise<void> => {
    try {
        const response = await Axios.put<void>(`${rootState.endpoints.connectApi}/connectors/${ name }/config`);
    } catch (e) {
        commit('connectorConfigError', e);
    }
};