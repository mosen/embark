<template>
    <v-card :loading="loading" flat tile class="fill-height">
        <v-card-title>
            <v-icon v-if="!error" color="green" class="mr-4">mdi-circle</v-icon>
            <v-icon v-else color="red" class="mr-4">mdi-cloud-alert</v-icon>
            <span class="title font-weight-light">Kafka Connect</span>
        </v-card-title>
        <v-card-text>
            <p v-if="error" class="headline text-center">
                Unable to connect
            </p>
            <v-list v-else class="transparent">

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Version</v-list-item-title>
                        <v-list-item-subtitle>{{ version }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
<!--                <v-list-item>-->
<!--                    <v-list-item-content>-->
<!--                        <v-list-item-title>Commit</v-list-item-title>-->
<!--                        <v-list-item-subtitle>{{ commit }}</v-list-item-subtitle>-->
<!--                    </v-list-item-content>-->
<!--                </v-list-item>-->
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Cluster ID</v-list-item-title>
                        <v-list-item-subtitle>{{ kafka_cluster_id }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>URL</v-list-item-title>
                        <v-list-item-subtitle>{{ url }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
    },
})
export default class ConnectStatus extends Vue {

    public get loading(): boolean {
        return this.$store.getters.isLoading('connectStatus');
    }

    public get error(): Error | null {
        return this.$store.getters.componentError('connectStatus');
    }

    public get url(): string {
        return this.$store.state.connect.url || "";
    }

    public get version(): string {
        return this.$store.state.connect.version || "";
    }

    public get commit(): string {
        return this.$store.state.connect.commit || "";
    }

    public get kafka_cluster_id(): string {
        /* eslint-disable camelcase */
        return this.$store.state.connect.kafka_cluster_id || "";
    }

    public created(): void {
        this.$store.dispatch('connectStatus');
    }
}
</script>

<style scoped>

</style>