<template>
    <v-card :loading="loading" flat tile class="fill-height">
        <v-card-title>
            <v-icon v-if="!error" color="green" class="mr-4">mdi-circle</v-icon>
            <v-icon v-else color="red" class="mr-4">mdi-cloud-alert</v-icon>
            <span class="title font-weight-light">KSQL</span>
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
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Cluster ID</v-list-item-title>
                        <v-list-item-subtitle>{{ clusterId }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Service ID</v-list-item-title>
                        <v-list-item-subtitle>{{ serviceId }}</v-list-item-subtitle>
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
export default class KSQLStatus extends Vue {

    public get loading(): boolean {
        return this.$store.getters.isLoading('ksqlStatus');
    }

    public get error(): Error | null {
        return this.$store.getters.componentError('ksqlStatus');
    }

    public get version(): string {
        return this.$store.state.ksql.info.data.KsqlServerInfo.version;
    }

    public get clusterId(): string {
        return this.$store.state.ksql.info.data.KsqlServerInfo.kafkaClusterId;
    }

    public get serviceId(): string {
        return this.$store.state.ksql.info.data.KsqlServerInfo.ksqlServiceId;
    }

    public created() {
        this.$store.dispatch('ksqlStatus');
    }
}
</script>

<style scoped>

</style>