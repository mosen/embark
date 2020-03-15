<template>
    <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
            item-key="name"
            :items-per-page="20"
            :loading="loading"
    >
        <template v-slot:item.task="{ item }">
            <router-link :to="`/connectors/${item.connector}/tasks/${item.task}`">{{item.task}}</router-link>
        </template>
        <template v-slot:item.pause="{ item }">
            <router-link :to="`/connectors/${item.connector}/tasks/${item.task}/pause`"><v-icon>mdi-pause</v-icon></router-link>

            <router-link :to="`/connectors/${item.connector}/tasks/${item.task}/resume`"><v-icon>mdi-play</v-icon></router-link>
        </template>
    </v-data-table>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {DataTableHeader} from "vuetify";

interface TableRow {
    task: string;
}

@Component
export default class ConnectorTasksDataTable extends Vue {

    @Prop()
    public readonly data?: { task: string; connector: string }[];

    @Prop()
    public search = "";

    @Prop(Boolean)
    public loading!: boolean;

    public headers: DataTableHeader[] = [
        {
            text: "Task",
            value: "task"
        },
        {
            text: "",
            value: "pause"
        }
    ];

    public get items(): TableRow[] {
        if (this.data) {
            return this.data.map((attrs) => {
                return { "task": attrs.task, "connector": attrs.connector };
            });
        } else {
            return [];
        }
    }
}
</script>
<style scoped>

</style>