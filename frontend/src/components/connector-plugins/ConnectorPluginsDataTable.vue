<template>
    <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        item-key="name"
        :items-per-page="20"
        :loading="loading"
    >
        <template v-slot:item.type="{ item }">
            {{ item.type }}
        </template>

    </v-data-table>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {DataTableHeader} from "vuetify";
import {ConnectorPlugin} from "@/store/connector_plugins/types";

interface TableRow {
    type: string;
    version: string;
    class: string;
}

@Component
export default class ConnectorPluginsDataTable extends Vue {

    @Prop()
    public readonly data?: ConnectorPlugin[];

    @Prop()
    public search = "";

    @Prop(Boolean)
    public loading!: boolean;

    public headers: DataTableHeader[] = [
        {
            text: "Type",
            value: "type"
        },
        {
            text: "Class",
            value: "class"
        },
        {
            text: "Ver.",
            value: "version"
        }
    ];

    public get items(): TableRow[] {
        if (this.data) {
            return this.data.map((plugin: ConnectorPlugin) => {
                return {
                    "type": plugin.type,
                    "version": plugin.version || "",
                    "class": plugin.class,
                };
            });
        } else {
            return [];
        }
    }
}
</script>

<style scoped>

</style>