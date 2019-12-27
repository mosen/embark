<template>
    <v-data-table
            :headers="headers"
            :items="items"
            :options.sync="options"
            :server-items-length="serverItemsLength"
            :items-per-page="perPage"
            :search="search"
            :loading="loading"
            loading-text="Fetching a list of topics"
            item-key="name"
            show-select
            @item-selected="handleSelectionChange"
            @toggle-select-all="handleAllSelectionChange"
    >
        <template v-slot:top>
            <v-toolbar flat>

                <NewTopicDialog></NewTopicDialog>

                <v-divider vertical class="ma-5"  dark />

                <v-text-field
                        v-model="search"
                        prepend-inner-icon="mdi-magnify"
                        append-icon="mdi-cross"
                        label="Search"
                        single-line
                        hide-details
                        clearable
                ></v-text-field>

                <v-divider vertical class="ma-5" dark />

                <TopicsActionMenu :selection="selection" @delete-selection="deleteSelectedTopics" />
            </v-toolbar>

        </template>
        <template v-slot:item.name="{ item }">
            <router-link :to="`/topic/${item.name}`">{{item.name}}</router-link>
        </template>
<!--        <template v-slot:item.action="{ item }">-->
<!--            <a @click="confirmDelete(item.name)"><v-icon>mdi-trash-can-outline</v-icon></a>-->
<!--        </template>-->
    </v-data-table>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {TableHeader} from 'vuetify/src/components/VDataTable/mixins/header';
import {TopicListing} from "@/store/topics/types";
import {DataTableOptions} from "@/types/vuetify";
import TopicsActionMenu from "./TopicsActionMenu.vue";
import NewTopicDialog from "./NewTopicDialog.vue";

interface TableRow extends TopicListing {

}

@Component({
    components: {TopicsActionMenu, NewTopicDialog},
})
export default class TopicsDataTable extends Vue {

    public search: string = "";
    public perPage: number = 15;
    public selection: string[] = [];

    public get loading(): boolean {
        return this.$store.state.topics.loading;
    }

    public options: Partial<DataTableOptions> = {};

    public get serverItemsLength(): number {
        return this.$store.state.topics.data ? this.$store.state.topics.data.total : 0;
    }

    public headers: TableHeader[] = [
        // {
        //     text: "",
        //     value: "internal",
        //     width: 50
        // },
        {
            text: "Name",
            value: "name"
        },
        {
            text: "",
            value: "action",
            align: "end"
        }
    ];

    public get items(): TableRow[] {

        if (this.$store.state.topics.data) {
            return this.$store.state.topics.data.map((l: TopicListing) => ({
                name: l.name,
                internal: l.internal,
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

    public created() {
        this.$store.dispatch('topics', {});
    }

    public deleteSelectedTopics(names: string[]) {
        console.log(names);
        console.log(this.selection);
        for (let name of this.selection) {
            this.$store.dispatch('deleteTopic', name);
        }
    }
}
</script>

<style scoped>

</style>