<template>
    <div v-if="data">
        <v-row>
            <v-col xs="12" sm="6" md="4" lg="4" xl="3" v-for="plugin in data" :key="plugin.id">
                <ConnectorPluginCard
                        v-if="connectors.plugins.hasOwnProperty(plugin.class)"
                        :data="plugin"
                        :metadata="connectors.plugins[plugin.class]"
                />
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {ConnectorPlugin} from "@/store/connector_plugins/types";
import connectors from "@/assets/connectors.json";
import ConnectorPluginCard from "./ConnectorPluginCard.vue";

@Component({
    components: {ConnectorPluginCard}
})
export default class ConnectorPluginsGallery extends Vue {

    @Prop()
    private data!: ConnectorPlugin[];

    @Prop(Boolean)
    private loading!: boolean;

    @Prop(Boolean)
    private error!: boolean;

    private connectors: any = connectors;

}
</script>

<style scoped>

</style>