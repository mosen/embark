<template>
    <v-data-table
        :headers="headers"
        :items="data"
        :search="search"
        item-key="name"
        :items-per-page="20"
        :loading="loading"
    >
        <template v-slot:item.name="{ item }">
            <router-link :to="`/topic/${item.name}`">{{item.name}}</router-link>
        </template>
        <template v-slot:item.action="{ item }">
            <a @click="confirmDelete(item.name)"><v-icon>mdi-trash-can-outline</v-icon></a>
        </template>
    </v-data-table>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {TopicListing} from "@/store/topics/types";

@Component
export default class TopicsDataTable extends Vue {

    @Prop()
    public readonly data?: TopicListing[];

    @Prop()
    public search: string = "";

    @Prop(Boolean)
    public loading!: boolean;

    public headers: any[] = [
        {
            text: "",
            value: "internal",
            width: 50
        },
        {
            text: "Name",
            value: "name"
        },
        {
            text: "",
            value: "action"
        }
    ];

    public confirmDelete(name: string) {
        console.log("Show dialog for name " + name);
        this.$store.dispatch('confirmDeleteTopic', name);
    }
}
</script>

<style scoped>

</style>