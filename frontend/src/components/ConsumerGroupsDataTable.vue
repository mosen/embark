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
            <router-link :to="`/consumer-group/${item.groupId}`">{{item.groupId}}</router-link>
        </template>
        <template v-slot:item.action="{ item }">
            <router-link :to="`/consumer-groups/remove/${item.groupId}`"><v-icon>mdi-trash-can-outline</v-icon></router-link>
        </template>
    </v-data-table>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {ConsumerGroupAttr} from "@/store/consumer_groups/types";
import {TableHeader} from 'vuetify/src/components/VDataTable/mixins/header';
import {Resource} from "@/jsonapi";

interface TableRow {
    groupId: string;
    isSimpleConsumerGroup: boolean;
}

@Component
export default class ConsumerGroupsDataTable extends Vue {

    @Prop()
    public readonly data?: Resource<ConsumerGroupAttr>[];

    @Prop()
    public search: string = "";

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
                return { "groupId": attrs.attributes.groupId, "isSimpleConsumerGroup": attrs.attributes.isSimpleConsumerGroup };
            });
        } else {
            return [];
        }
    }
}
</script>

<style scoped>

</style>