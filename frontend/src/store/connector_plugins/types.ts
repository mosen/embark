import {JSONAPIDocument} from "@/jsonapi";


// export interface ConnectorPluginAttr {
//     name: string;
// }

export interface ConnectorPluginAttr {
    class: string;
    type: string;
    version: string;
}

export type ConnectorPluginResponseDto = JSONAPIDocument<ConnectorPluginAttr>;

export type ConnectorPluginsResponseDto = JSONAPIDocument<ConnectorPluginAttr>;
