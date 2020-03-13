<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1 class="display-1 pt-2 pb-2">{{ $route.params.name }}</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-subheader>summary</v-subheader>
                <v-list>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-animation</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ partitions.length }}</v-list-item-title>
                            <v-list-item-subtitle v-if="partitions.length !== 1">Partitions</v-list-item-subtitle>
                            <v-list-item-subtitle v-else>Partition</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-col>
            <v-col cols="6">
                <v-subheader>schema</v-subheader>
                <v-list>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-key</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Key Schema</v-list-item-title>
                            <v-list-item-subtitle>NAME</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-database</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Value Schema</v-list-item-title>
                            <v-list-item-subtitle>NAME</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
        <v-layout>
            <v-flex xs12>
                <v-tabs v-model="tabs">
                    <v-tab href="#topic-tabs-1">Partitions</v-tab>
                    <v-tab href="#topic-tabs-2">Configuration</v-tab>
                    <v-tab href="#topic-tabs-3">Permissions</v-tab>
                </v-tabs>

                <v-tabs-items v-model="tabs">
                    <v-tab-item key="1" value="topic-tabs-1">
                        <Partitions :partitions="partitions"></Partitions>
                    </v-tab-item>
                    <v-tab-item key="2" value="topic-tabs-2">
                        <Configurations :configurations="configurations"></Configurations>
                    </v-tab-item>
                    <v-tab-item key="3" value="topic-tabs-3">
                        <Permissions :bindings="aclBindings"></Permissions>
                    </v-tab-item>
                </v-tabs-items>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {TopicDescription, TopicPartition} from '@/store/topics/types';
import Partitions from "@/components/topics/Partitions.vue";
import Configurations from "@/components/topics/Configurations.vue";
import Permissions from '@/components/topics/Permissions.vue';
import {ConfigEntry} from "@/store/types";
import {AclBinding} from "@/types/acl";

@Component({
    components: {Partitions, Configurations, Permissions}
})
export default class Topic extends Vue {

    public tabs = "topic-tabs-1";

    public get partitions(): TopicPartition[] {
        if (this.$store.state.topics.current) {
            return this.$store.state.topics.current.partitions;
        } else {
            return [];
        }
    }

    public get configurations(): ConfigEntry[] {
        if (this.$store.state.topics.configuration) {
            return this.$store.state.topics.configuration;
        } else {
            return [];
        }
    }

    public get aclBindings(): AclBinding[] {
        if (this.$store.state.acl_bindings.data) {
            return this.$store.state.acl_bindings.data;
        } else {
            return [];
        }
    }

    public get topic(): TopicDescription | null {
        return this.$store.state.topics.current;
    }

    public mounted(): void {
        this.$store.dispatch('topic', this.$route.params.name);
        this.$store.dispatch('topicConfiguration', this.$route.params.name);
        this.$store.dispatch('aclBindings', { resourceType: 'TOPIC', resource: this.$route.params.name });
        this.$store.dispatch('topicSchemas', this.$route.params.name);
    }

}
</script>