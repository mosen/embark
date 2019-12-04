import {Action} from "vuex";
import {RootState} from "@/store";
import Axios from "axios";

import {ConnectorPluginsResponseDto} from "./types";
import {ConnectorPluginsState} from "@/store/connector_plugins/index";

type ConnectorPluginAction = Action<ConnectorPluginsState, RootState>;

export const connectorPlugins: ConnectorPluginAction = async ({commit, rootState}): Promise<void> => {
    commit('connectorPluginsRequested', { name });
    try {
        const response = await Axios.get<ConnectorPluginsResponseDto>(`${rootState.endpoints.connectApi}/v1/connector-plugins`);
        commit('connectorPluginsReplace', response.data);
    } catch (e) {
        commit('connectorPluginsError', e);
    }
};
