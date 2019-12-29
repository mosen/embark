<template>
    <v-data-table
        :headers="headers"
        :items="items"
        :options.sync="options"
        :server-items-length="serverItemsLength"
        :items-per-page="perPage"
        :search="search"
        :loading="loading"
        loading-text="Fetching a list of subjects"
        item-key="name"
        show-select
        @item-selected="handleSelectionChange"
        @toggle-select-all="handleAllSelectionChange"
    >
        <template v-slot:top>
            <v-row>
                <v-col cols="12">
                    <v-toolbar flat>

                    </v-toolbar>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-text-field
                            v-model="search"
                            prepend-inner-icon="mdi-magnify"
                            append-icon="mdi-cross"
                            label="Search"
                            single-line
                            flat
                            hide-details
                            clearable
                            class="pa-4"
                    ></v-text-field>
                </v-col>
            </v-row>
        </template>
        <template v-slot:item.name="{ item }">
            <router-link :to="`/subject/${item.name}`">{{item.name}}</router-link>
        </template>
    </v-data-table>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {TableHeader} from 'vuetify/src/components/VDataTable/mixins/header';
import {DataTableOptions} from "@/types/vuetify";
import TopicsActionMenu from "./TopicsActionMenu.vue";
import NewTopicDialog from "./NewTopicDialog.vue";

interface TableRow {
    name: string;
}

@Component({
    components: {},
})
export default class SubjectsDataTable extends Vue {

    public search: string = "";
    public perPage: number = 15;
    public selection: string[] = [];

    public get loading(): boolean {
        return this.$store.state.subjects.loading;
    }

    public options: Partial<DataTableOptions> = {};

    public get serverItemsLength(): number {
        return this.$store.state.subjects.data ? this.$store.state.subjects.data.total : 0;
    }

    public headers: TableHeader[] = [
        {
            text: "Name",
            value: "name"
        }
    ];

    public get items(): TableRow[] {
        if (this.$store.state.subjects.data) {
            return this.$store.state.subjects.data.map((subject: string) => ({
                name: subject
            }));
        } else {
            return [];
        }
    }


    @Watch("options")
    public handleOptionsChange(value: DataTableOptions) {
        this.$store.dispatch('topics', {
            options: value,
        });
    }

    public handleSelectionChange(value: { value: boolean; item: any; }) {
        if (value.value) {
            this.selection.unshift(value.item.name);
        } else {
            this.selection.splice(this.selection.indexOf(value.item.name), 1);
        }
    }

    public handleAllSelectionChange({ value }: { value: boolean; }) {
        if (value) {
            this.selection = this.items.map(r => r.name);
        } else {
            this.selection = [];
        }
    }
}
</script>

<style scoped>

</style>