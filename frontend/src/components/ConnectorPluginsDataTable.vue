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
            <v-icon v-if="item.type === 'source'" title="source">mdi-upload</v-icon>
            <v-icon v-if="item.type === 'sink'" title="sink">mdi-briefcase-download</v-icon>
        </template>

    </v-data-table>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {TableHeader} from 'vuetify/src/components/VDataTable/mixins/header';
import {Resource} from "@/jsonapi";

interface TableRow {
    type: string;
    version: string;
    class: string;
}

@Component
export default class ConnectorPluginsDataTable extends Vue {

    @Prop()
    public readonly data?: Resource<{ type: string; class: string; version: string }>[];

    @Prop()
    public search: string = "";

    @Prop(Boolean)
    public loading!: boolean;

    public headers: TableHeader[] = [
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
            return this.data.map((attrs) => {
                return {
                    "type": attrs.attributes.type,
                    "version": attrs.attributes.version,
                    "class": attrs.attributes.class,
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