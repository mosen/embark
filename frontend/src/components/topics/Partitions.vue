<template>
    <v-list>
        <v-list-group
            v-for="(partitions, leader) in invertedPartitions"
            :key="leader"
            prepend-icon="mdi-animation"
            no-action
        >
            <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title v-text="'Leader ' + leader"></v-list-item-title>
                </v-list-item-content>
            </template>

            <v-list-item v-for="partition in partitions">
                <v-list-item-content>
                    <v-list-item-subtitle>Partition {{ partition.partition }}</v-list-item-subtitle>
                    <v-list-item-title>{{ partition.replicas.length }} Replica(s),  {{ partition.isr.length }} In-sync Replica(s)</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-group>
    </v-list>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {TopicPartition} from "@/store/topics/types";
import Partition from "./Partition.vue";

interface PartitionLeaders {
    [leader: string]: TopicPartition[];
}

@Component({
    components: {Partition},
})
export default class Partitions extends Vue {

    @Prop()
    private partitions!: TopicPartition[];

    public get invertedPartitions(): PartitionLeaders {
        return this.partitions.reduce((memo: PartitionLeaders, p) => {
            if (!memo.hasOwnProperty(p.leader.host + ':' + p.leader.port)) {
                memo[p.leader.host + ':' + p.leader.port] = [p];
                return memo;
            } else {
                memo[p.leader.host + ':' + p.leader.port].unshift(p);
                return memo;
            }
        }, {});
    }
}
</script>

<style scoped>

</style>