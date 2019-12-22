<template>
    <div v-if="data">
        <v-row>
            <v-col lg="3" v-for="(plugin, idx) in data" :key="plugin.id">
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