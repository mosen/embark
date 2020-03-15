import Vue from 'vue';
import Vuex from 'vuex';

import {AclBindingsModule} from "@/store/acl_bindings";
import {TopicsModule} from "@/store/topics";
import {ConsumerGroupsModule} from "@/store/consumer_groups";
import {ConnectorsModule} from "@/store/connectors";
import {ConnectorPluginsModule} from "@/store/connector_plugins";
import {SubjectsModule} from "@/store/subjects";
import {KSQLModule} from "@/store/ksql";
import {CompatibilityLevel} from "@/store/subjects/types";

import * as actions from "./actions";
import * as mutations from "./mutations";

import {KSQLServerInfo} from "@/store/ksql/types";

Vue.use(Vuex);

// For any REST service the following are present
export interface EndpointState {
    loading: boolean;
    error: Error | null;
}

export interface KSQLEndpointState extends EndpointState {
    info: KSQLServerInfo | null;
}

export interface KafkaState extends EndpointState {
    nodes: string[];
    clusterId: string;
}

export interface RegistryState extends EndpointState {
    compatibility: CompatibilityLevel | null;
}

export interface ConnectState extends EndpointState {
    version: string;
    commit: string;
    kafka_cluster_id: string;
    url: string;
}

export interface RootState {
    endpoints: {
        adminApi?: string;
        connectApi?: string;
        schemaRegistryApi?: string;
        ksqlApi?: string;
    };

    snackbar: {
        open: boolean;
        text: string;
    };

    drawer: {
        open: boolean;
    };

    // High-level status information
    connect: ConnectState;
    registry: RegistryState;
    cluster: KafkaState;
    ksql: KSQLEndpointState;
}

export default new Vuex.Store<RootState>({
    modules: {
        aclBindings: AclBindingsModule,
        topics: TopicsModule,
        consumerGroups: ConsumerGroupsModule,
        connectors: ConnectorsModule,
        connectorPlugins: ConnectorPluginsModule,
        subjects: SubjectsModule,
        ksql: KSQLModule,
    },
    state: {
        endpoints: {
            adminApi: process.env.VUE_APP_KAFKA_ADMIN_API,
            connectApi: process.env.VUE_APP_KAFKA_CONNECT,
            schemaRegistryApi: process.env.VUE_APP_SCHEMA_REGISTRY,
            ksqlApi: process.env.VUE_APP_KSQL,
        },

        snackbar: {
            open: false,
            text: ""
        },

        drawer: {
            open: true,
        },

        connect: {
            loading: false,
            error: null,

            commit: "",
            kafka_cluster_id: "",
            version: "",
            url: "",
        },
        registry: {
            loading: false,
            error: null,

            compatibility: null,
        },
        cluster: {
            loading: false,
            error: null,

            clusterId: "",
            nodes: [],
        },
        ksql: {
            loading: false,
            error: null,

            info: null,
        }
    },
    mutations,
    actions,
});
