import Vue from 'vue';
import Vuex from 'vuex';

import {AclBindingsModule} from "@/store/acl_bindings";
import {TopicsModule} from "@/store/topics";
import {ConsumerGroupsModule} from "@/store/consumer_groups";
import {ConnectorsModule} from "@/store/connectors";
import {ConnectorPluginsModule} from "@/store/connector_plugins";
import {SubjectsModule} from "@/store/subjects";
import {KSQLModule} from "@/store/ksql";

import * as actions from "./actions";
import * as mutations from "./mutations";

Vue.use(Vuex);


export interface RootState {
    endpoints: {
        adminApi?: string;
        connectApi?: string;
        schemaRegistryApi?: string;
        ksqlApi?: string;
    };

    loading: boolean;
    hasError: boolean;
    error: Error | null;

    snackbar: {
        open: boolean;
        text: string;
    };

    connect: {
        loading: boolean;
        error: boolean;

        version: string;
        commit: string;
        kafka_cluster_id: string;
        url: string;
    };

    registry: {
        loading: boolean;
        error: boolean;

        url: string;
    };

    cluster: {
        loading: boolean;
        error: boolean;

        nodes: string[];
        clusterId: string;
    };
}

export default new Vuex.Store<RootState>({
    modules: {
        acl_bindings: AclBindingsModule,
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
            connectApi: process.env.VUE_APP_KAFKA_CONNECT_API,
            schemaRegistryApi: process.env.VUE_APP_KAFKA_SCHEMA_REGISTRY_API,
            ksqlApi: process.env.VUE_APP_KAFKA_KSQL_API,
        },

        loading: false,
        hasError: false,
        error: null,
        snackbar: {
            open: false,
            text: ""
        },

        connect: {
            loading: false,
            error: false,

            commit: "",
            kafka_cluster_id: "",
            version: "",
            url: "",
        },

        registry: {
            loading: false,
            error: false,

            url: "",
        },

        cluster: {
            loading: false,
            error: false,

            nodes: [],
        }
    },
    mutations,
    actions,
});
