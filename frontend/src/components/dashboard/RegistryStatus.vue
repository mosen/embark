<template>
    <v-card :loading="loading" flat tile>
        <v-card-title>
            <v-icon v-if="!error" color="green" class="mr-4">mdi-circle</v-icon>
            <v-icon v-else color="red" class="mr-4">mdi-cloud-alert</v-icon>
            <span class="title font-weight-light">Schema Registry</span>
        </v-card-title>
        <v-card-text>
            <p v-if="error" class="headline text-center">
                Unable to connect
            </p>
            <v-list v-else class="transparent">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>{{ compatibility }}</v-list-item-title>
                        <v-list-item-subtitle>Global Compatibility Level</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {CompatibilityLevel} from "@/store/subjects/types";

@Component({
    components: {
    },
})
export default class RegistryStatus extends Vue {

    public get loading(): boolean {
        return this.$store.state.registry.loading;
    }

    public get url(): string {
        return this.$store.state.registry.url || "";
    }

    public get compatibility(): CompatibilityLevel | null {
        return this.$store.state.registry.compatibility.compatibilityLevel;
    }

    public get error(): boolean {
        return this.$store.state.registry.error;
    }

    public created() {
        this.$store.dispatch('fetchRegistryInfo');
    }
}
</script>

<style scoped>

</style>