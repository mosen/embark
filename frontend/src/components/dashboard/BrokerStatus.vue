<template>
    <v-card :loading="loading" flat tile class="fill-height">
        <v-card-title>
            <v-icon v-if="!error" color="green" class="mr-4">mdi-circle</v-icon>
            <v-icon v-else color="red" class="mr-4">mdi-cloud-alert</v-icon>
            <span class="title font-weight-light">Kafka Brokers</span>
        </v-card-title>
        <v-card-text>
            <p v-if="error" class="headline text-center">
                Unable to connect
            </p>
            <v-list v-else class="transparent">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Broker(s)</v-list-item-title>
                        <v-list-item-subtitle>
                            <p :key="node" v-for="node in nodes">{{ node }}</p>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class BrokerStatus extends Vue {

    public get loading(): boolean {
        return this.$store.state.cluster.loading;
    }

    public get error(): Error | null {
        return this.$store.state.cluster.error;
    }

    public get nodes(): string[] {
        return this.$store.state.cluster.nodes ?? [];
    }

    public created() {
        this.$store.dispatch('kafkaStatus');
    }
}
</script>

<style scoped>

</style>