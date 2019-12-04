<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
                <v-sheet>
                    <h1 class="display-1">{{ $route.params.name }}</h1>
                </v-sheet>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12>
                <v-btn-toggle>
                    <v-btn>
                        <v-icon @click="pause"
                                :disabled="connectorStatus.attributes.connector.state == 'PAUSED'">mdi-pause</v-icon>
                    </v-btn>
                    <v-btn>
                        <v-icon @click="resume"
                                :disabled="connectorStatus.attributes.connector.state == 'RUNNING'">mdi-play</v-icon>
                    </v-btn>
                    <v-btn>
                        <v-icon>mdi-refresh</v-icon>
                    </v-btn>
                </v-btn-toggle>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12>
                <v-tabs v-model="tabs">
                    <v-tab href="#connector-tabs-1">Tasks</v-tab>
                    <v-tab href="#connector-tabs-2">Configuration</v-tab>
                </v-tabs>

                <v-tabs-items v-model="tabs">
                    <v-tab-item key="1" value="connector-tabs-1">
                        <ConnectorTasksDataTable :data="connector.attributes.tasks"></ConnectorTasksDataTable>
                    </v-tab-item>
                    <v-tab-item key="2" value="connector-tabs-2">
                        <Configurations :configurations="connector.attributes.config"></Configurations>
                    </v-tab-item>
                </v-tabs-items>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import Configurations from "@/components/Configurations.vue";
import {ConnectorResponseDto, ConnectorStatusResponseDto} from '@/store/connectors/types';
import ConnectorTasksDataTable from "@/components/ConnectorTasksDataTable.vue";

@Component({
    components: {Configurations, ConnectorTasksDataTable}
})
export default class Connector extends Vue {

    public tabs: string = "connector-tabs-1";

    public get connector(): ConnectorResponseDto {
        return this.$store.state.connectors.current;
    }

    public get connectorStatus(): ConnectorStatusResponseDto {
        return this.$store.state.connectors.currentStatus;
    }

    public mounted(): void {
        this.$store.dispatch('connector', this.$route.params.name);
        this.$store.dispatch('connectorStatus', this.$route.params.name);
    }

    public pause(): void {
        this.$store.dispatch('pauseConnector', this.$route.params.name);
    }

    public resume(): void {
        this.$store.dispatch('resumeConnector', this.$route.params.name);
    }

}
</script>