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
                <TopicsDataTable></TopicsDataTable>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import TopicsDataTable from '@/components/topics/TopicsDataTable.vue';

@Component({
    components: {TopicsDataTable}
})
export default class Topics extends Vue {

    public search?: string = "";

    public get hasError() {
        return this.$store.state.topics.hasError;
    }

    public get errorMessage() {
        return this.$store.state.topics.errorMessage;
    }

    public get deleteDialogVisible() {
        return this.$store.state.topics.deleteDialogVisible;
    }

    public get deleteTopic() {
        return this.$store.state.topics.deleteTopicName;
    }
}
</script>