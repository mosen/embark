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
                <v-list>
                    <v-subheader>summary</v-subheader>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-basket-fill</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ consumers.length }}</v-list-item-title>
                            <v-list-item-subtitle v-if="consumers.length !== 1">Consumers</v-list-item-subtitle>
                            <v-list-item-subtitle v-else>Consumer</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item v-if="coordinator">
                        <v-list-item-icon>
                            <v-icon>mdi-traffic-light</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ coordinator.host }}:{{ coordinator.port }}</v-list-item-title>
                            <v-list-item-subtitle>Coordinator</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item v-if="consumerGroup">
                        <v-list-item-icon>
                            <v-icon>mdi-cards-heart</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ consumerGroup.attributes.state }}</v-list-item-title>
                            <v-list-item-subtitle>State</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12>
                <v-tabs v-model="tabs">
                    <v-tab href="#cg-tabs-1">Consumers</v-tab>
                    <v-tab href="#cg-tabs-2">Offsets</v-tab>
                </v-tabs>

                <v-tabs-items v-model="tabs">
                    <v-tab-item key="1" value="cg-tabs-1">
                        <v-data-table
                            :items="consumers"
                            :headers="consumerTableHeaders"
                        >
                        </v-data-table>
                    </v-tab-item>
                    <v-tab-item key="2" value="cg-tabs-2">
                        <v-data-table
                            :items="consumerGroupOffsets"
                            :headers="consumerOffsetTableHeaders"
                        >
                        </v-data-table>
                    </v-tab-item>
                </v-tabs-items>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Consumer, ConsumerGroupDescription, ConsumerGroupOffset} from '@/store/consumer_groups/types';
import {KafkaNode} from "@/store/topics/types";
import {TableHeader} from 'vuetify/src/components/VDataTable/mixins/header';


@Component({
    components: {}
})
export default class ConsumerGroup extends Vue {

    public tabs: string = "cg-tabs-1";

    public consumerTableHeaders: TableHeader[] = [
        {
            text: "Client ID",
            value: "clientId"
        },
        {
            text: "Host",
            value: "host"
        }
    ];

    public consumerOffsetTableHeaders: TableHeader[] = [
        {
            text: "Topic",
            value: "topic"
        },
        {
            text: "Partition",
            value: "partition"
        },
        {
            text: "Offset",
            value: "offset"
        }
    ];

    public get coordinator(): KafkaNode | null {
        if (this.$store.state.consumerGroups.current) {
            return this.$store.state.consumerGroups.current.attributes.coordinator;
        } else {
            return null;
        }
    }

    public get consumers(): Consumer[] {
        if (this.$store.state.consumerGroups.current) {
            return this.$store.state.consumerGroups.current.attributes.members;
        } else {
            return [];
        }
    }

    public get consumerGroup(): ConsumerGroupDescription {
        return this.$store.state.consumerGroups.current;
    }

    public get consumerGroupOffsets(): ConsumerGroupOffset[] {
        if (this.$store.state.consumerGroups.offsets) {
            return this.$store.state.consumerGroups.offsets.data;
        } else {
            return [];
        }
    }

    public mounted(): void {
        this.$store.dispatch('consumerGroup', this.$route.params.name);
        this.$store.dispatch('consumerGroupOffsets', this.$route.params.name);
    }
}
</script>