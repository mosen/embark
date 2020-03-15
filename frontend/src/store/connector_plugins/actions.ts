import {Action} from "vuex";
import {RootState} from "@/store";
import Axios from "axios";

import {ConnectorPluginsResponse, ConnectorPluginValidationResult} from "./types";
import {ConnectorPluginsState} from "@/store/connector_plugins/index";

type ConnectorPluginAction = Action<ConnectorPluginsState, RootState>;

export const connectorPlugins: ConnectorPluginAction = async ({commit, rootState}): Promise<void> => {
    commit('connectorPluginsRequested', { name });
    try {
        const response = await Axios.get<ConnectorPluginsResponse>(`${rootState.endpoints.connectApi}/connector-plugins/`);
        commit('connectorPluginsReplace', response);
    } catch (e) {
        commit('connectorPluginsError', e);
    }
};

export const validateConnectorPlugin: ConnectorPluginAction = async({commit, rootState}, { classname, config }: { classname: string; config: Record<string, any> }): Promise<void> => {
    commit('validateConnectorPluginRequested', classname);
    try {
        const response = await Axios.put<ConnectorPluginValidationResult>(`${rootState.endpoints.connectApi}/connector-plugins/${classname}/config/validate`, config);
        commit('validateConnectorPluginReplace', response);
    } catch (e) {
        commit('validateConnectorPluginError', e);
    }
};