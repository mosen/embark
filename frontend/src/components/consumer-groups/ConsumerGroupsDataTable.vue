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
import {ConsumerGroup} from "@/store/consumer_groups/types";
import {DataTableHeader} from "vuetify";

interface TableRow {
    groupId: string;
    isSimpleConsumerGroup: boolean;
}

@Component
export default class ConsumerGroupsDataTable extends Vue {

    @Prop({ default: [] })
    private readonly data!: ConsumerGroup[];

    @Prop()
    public search = "";

    @Prop(Boolean)
    public loading!: boolean;

    public headers: DataTableHeader[] = [
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
            return this.data.map((cg) => {
                return { "groupId": cg.groupId, "isSimpleConsumerGroup": cg.isSimpleConsumerGroup };
            });
        } else {
            return [];
        }
    }
}
</script>

<style scoped>

</style>