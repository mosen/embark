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
        <NewTopicDialog></NewTopicDialog>
        <DeleteTopicDialog :visible="deleteDialogVisible" :name="deleteTopic"></DeleteTopicDialog>
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
                <TopicsDataTable
                        :data="topics"
                        :search="search"
                        :loading="loading"
                ></TopicsDataTable>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import TopicsDataTable from '../components/TopicsDataTable.vue';
import NewTopicDialog from "@/components/NewTopicDialog.vue";
import DeleteTopicDialog from "@/components/DeleteTopicDialog.vue";
import {TopicListing} from "@/store/topics/types";

@Component({
    components: {TopicsDataTable, NewTopicDialog, DeleteTopicDialog}
})
export default class Topics extends Vue {

    public search?: string = "";

    public get deleteDialogVisible() {
        return this.$store.state.topics.deleteDialogVisible;
    }

    public get deleteTopic() {
        return this.$store.state.topics.deleteTopicName;
    }

    public get topics(): TopicListing[] {
        return this.$store.state.topics.data;
    }

    public get loading() {
        return this.$store.state.topics.loading;
    }

    public get hasError() {
        return this.$store.state.topics.hasError;
    }

    public get errorMessage() {
        return this.$store.state.topics.errorMessage;
    }

    public created() {
        this.$store.dispatch('topics');
    }
}
</script>