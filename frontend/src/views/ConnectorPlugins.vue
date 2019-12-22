<template>
    <v-container>
        <v-row>
            <v-col xs12>
                <v-expand-transition>
                    <v-alert v-if="hasError" type="error" colored-border border="left">
                        {{ errorMessage }}
                    </v-alert>
                </v-expand-transition>
            </v-col>
        </v-row>
        <v-row>
            <v-col xs12 class="mb-5">
                <v-text-field
                        v-model="search"
                        prepend-inner-icon="mdi-magnify"
                        append-icon="mdi-cross"
                        label="Search"
                        single-line
                        hide-details
                ></v-text-field>
            </v-col>
            <v-col xs12>
                <ConnectorPluginsDataTable
                        :data="connectorPlugins"
                        :search="search"
                        :loading="loading"
                ></ConnectorPluginsDataTable>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <p>Don't see the connector you want?</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import ConnectorPluginsDataTable from "@/components/connector-plugins/ConnectorPluginsDataTable.vue";

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