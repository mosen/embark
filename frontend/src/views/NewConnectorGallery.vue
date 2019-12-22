<template>
    <v-container>
        <v-row>
            <v-col>
                <v-text-field
                        v-model="search"
                        prepend-inner-icon="mdi-magnify"
                        append-icon="mdi-cross"
                        label="Search Connectors"
                        single-line
                        hide-details
                        clearable
                ></v-text-field>
            </v-col>
        </v-row>
        <ConnectorPluginsGallery
                :data="connectorPlugins"
                :loading="loading"
                :error="hasError" />
    </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import ConnectorPluginsGallery from "@/components/connector-plugins/ConnectorPluginsGallery.vue";

@Component({
    components: {ConnectorPluginsGallery}
})
export default class NewConnectorGallery extends Vue {

    public search: string = "";

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