<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
                <v-expand-transition>
                    <v-alert v-if="hasError" type="error" colored-border border="left">
                        {{ errorMessage }}
                    </v-alert>
                </v-expand-transition>
            </v-flex>
        </v-layout>
        <v-layout wrap>
            <v-flex xs12 class="mb-5">
                <v-text-field
                        v-model="search"
                        prepend-inner-icon="mdi-magnify"
                        append-icon="mdi-cross"
                        label="Search"
                        single-line
                        hide-details
                ></v-text-field>
            </v-flex>
            <v-flex xs12>
                <ConnectorPluginsDataTable
                        :data="connectorPlugins"
                        :search="search"
                        :loading="loading"
                ></ConnectorPluginsDataTable>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import ConnectorPluginsDataTable from "@/components/ConnectorPluginsDataTable.vue";

@Component({
    components: {ConnectorPluginsDataTable}
})
export default class ConnectorPlugins extends Vue {

    public search?: string = "";

    public get connectorPlugins() {
        return this.$store.state.connectorPlugins.data;
    }

    public get loading() {
        return this.$store.state.connectorPlugins.loading;
    }

    public get hasError() {
        return this.$store.state.connectorPlugins.hasError;
    }

    public get errorMessage() {
        return this.$store.state.connectorPlugins.errorMessage;
    }

    public created() {
        this.$store.dispatch('connectorPlugins');
    }
}
</script>

<style scoped>

</style>