<template>
    <v-card tile>
        <v-img :src="metadata.logo"
               height="80px"
               gradient="to top, rgba(0,0,0,.1), rgba(0,0,0,.3)"
        >
        </v-img>
        <v-card-title>
            <p class="subtitle-2">{{ data.attributes.version }}</p>
            <p>{{ metadata.title }}</p>
        </v-card-title>
        <v-card-text>
            {{ metadata.owner.name }}
        </v-card-text>
        <v-card-actions>
            <v-btn text>create</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {ConnectorPluginAttr} from '@/store/connector_plugins/types';
import {Resource} from "@/jsonapi";

@Component
export default class ConnectorPluginCard extends Vue {

    @Prop()
    private data!: Resource<ConnectorPluginAttr>;

    @Prop()
    private metadata!: any;

}
</script>

<style scoped>

</style>