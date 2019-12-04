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
import {Resource} from "@/jsonapi";

interface TableRow {
    name: string;
}

@Component
export default class SubjectsDataTable extends Vue {

    @Prop()
    public readonly data?: Resource<{ name: string }>[];

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
            return this.data.map((attrs) => {
                return {
                    "name": attrs.attributes.name
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