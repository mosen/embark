<template>
    <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        item-key="name"
        :items-per-page="20"
        :loading="loading"
    >
        <template v-slot:item.groupId="{ item }">
            <router-link :to="`/connectors/${item.name}`">{{item.name}}</router-link>
        </template>
        <template v-slot:item.action="{ item }">
            <router-link :to="`/connectors/remove/${item.name}`"><v-icon>mdi-trash-can-outline</v-icon></router-link>
        </template>
    </v-data-table>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {TableHeader} from 'vuetify/src/components/VDataTable/mixins/header';
import {Connector} from "@/store/connectors/types";

interface TableRow {
    name: string;
}

@Component
export default class ConnectorsDataTable extends Vue {

    @Prop()
    public readonly data?: Connector[];

    @Prop()
    public search = "";

    @Prop(Boolean)
    public loading!: boolean;

    public headers: TableHeader[] = [
        {
            text: "Name",
            value: "groupId"
        },
        {
            text: "",
            value: "action"
        }
    ];

    public get items(): TableRow[] {
        if (this.data) {
            return this.data.map((attrs) => {
                return { "name": attrs.name };
            });
        } else {
            return [];
        }
    }
}
</script>

<style scoped>

</style>