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
                <ConsumerGroupsDataTable
                        :data="consumerGroups"
                        :search="search"
                        :loading="loading"
                ></ConsumerGroupsDataTable>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import ConsumerGroupsDataTable from "@/components/ConsumerGroupsDataTable.vue";

@Component({
    components: {ConsumerGroupsDataTable}
})
export default class ConsumerGroups extends Vue {

    public search?: string = "";

    public get consumerGroups() {
        return this.$store.state.consumerGroups.data;
    }

    public get loading() {
        return this.$store.state.consumerGroups.loading;
    }

    public get hasError() {
        return this.$store.state.consumerGroups.hasError;
    }

    public get errorMessage() {
        return this.$store.state.consumerGroups.errorMessage;
    }

    public created() {
        this.$store.dispatch('consumerGroups');
    }
}
</script>

<style scoped>

</style>