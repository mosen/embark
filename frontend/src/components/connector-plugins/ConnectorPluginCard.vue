<template>
    <v-card tile>
        <v-img v-if="metadata.logo" :src="metadata.logo"
               height="80px"
               gradient="to top, rgba(0,0,0,.1), rgba(0,0,0,.3)"
        >
        </v-img>
        <v-img v-else src="/assets/connectors/apache-kafka.png"
               height="80px"
               gradient="to top, rgba(0,0,0,.1), rgba(0,0,0,.3)"
        >
        </v-img>

        <v-card-title>
            <p>{{ metadata.title }}</p>
        </v-card-title>
        <v-card-text>
            <p v-if="data.version && data.version !== null && data.version !== 'null'" class="subtitle-2">{{ data.version }}</p>
            {{ metadata.owner.name }}
        </v-card-text>
        <v-card-actions>
            <v-btn text :to="`/new/connector/class/${data.class}`">create</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from "vue-property-decorator";
import {ConnectorPlugin} from '@/store/connector_plugins/types';

@Component
export default class ConnectorPluginCard extends Vue {

    @Prop()
    private data!: ConnectorPlugin;

    @Prop()
    private metadata!: any;

    @Emit()
    public create() {
        return this.data;
    }
}
</script>

<style scoped>

</style>