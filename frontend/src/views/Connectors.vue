<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
                <v-expand-transition>
                    <v-alert v-if="hasError" type="error" colored-border border="left">
                        {{ errorMessage }}
                    </v-alert>
                </v-expand-transition>
            </v-flex>
        </v-layout>
        <v-btn color="accent" to="/new/connector">New
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-layout wrap>
            <v-flex xs12 class="mb-5">
                <v-text-field
                        v-model="search"
                        prepend-inner-icon="mdi-magnify"
                        append-icon="mdi-cross"
                        label="Search"
                        single-line
                        hide-details
                ></v-text-field>
            </v-flex>
            <v-flex xs12>
                <ConnectorsDataTable
                        :data="connectors"
                        :search="search"
                        :loading="loading"
                ></ConnectorsDataTable>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import ConnectorsDataTable from "@/components/ConnectorsDataTable.vue";

@Component({
    components: {ConnectorsDataTable}
})
export default class Connectors extends Vue {

    public search?: string = "";

    public get connectors() {
        return this.$store.state.connectors.data;
    }

    public get loading() {
        return this.$store.state.connectors.loading;
    }

    public get hasError() {
        return this.$store.state.connectors.hasError;
    }

    public get errorMessage() {
        return this.$store.state.connectors.errorMessage;
    }

    public created() {
        this.$store.dispatch('connectors');
    }
}
</script>

<style scoped>

</style>