<template>
    <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        item-key="name"
        :items-per-page="20"
        :loading="loading"
    >
        <template v-slot:item.name="{ item }">
            <router-link :to="`/subject/${item.name}`">{{item.name}}</router-link>
        </template>

    </v-data-table>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {TableHeader} from 'vuetify/src/components/VDataTable/mixins/header';

interface TableRow {
    name: string;
}

@Component
export default class SubjectsDataTable extends Vue {

    @Prop()
    public readonly data?: string[];

    @Prop()
    public search: string = "";

    @Prop(Boolean)
    public loading!: boolean;

    public headers: TableHeader[] = [
        {
            text: "Name",
            value: "name"
        }
    ];

    public get items(): TableRow[] {
        if (this.data) {
            return this.data.map(schemaName => ({ "name": schemaName }));
        } else {
            return [];
        }
    }
}
</script>

<style scoped>

</style>