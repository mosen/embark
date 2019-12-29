<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-expand-transition>
                    <v-alert v-if="hasError" type="error" colored-border border="left">
                        {{ errorMessage }}
                    </v-alert>
                </v-expand-transition>
            </v-col>
        </v-row>
        <v-row wrap>
            <v-col cols="12">
                <SubjectsDataTable
                        :data="subjects"
                        :search="search"
                        :loading="loading"
                ></SubjectsDataTable>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import SubjectsDataTable from "@/components/subjects/SubjectsDataTable.vue";

@Component({
    components: {SubjectsDataTable}
})
export default class Subjects extends Vue {

    public search?: string = "";

    public get subjects() {
        return this.$store.state.subjects.data;
    }

    public get loading() {
        return this.$store.state.subjects.loading;
    }

    public get hasError() {
        return this.$store.state.subjects.hasError;
    }

    public get errorMessage() {
        return this.$store.state.subjects.errorMessage;
    }

    public created() {
        this.$store.dispatch('subjects');
    }
}
</script>

<style scoped>

</style>