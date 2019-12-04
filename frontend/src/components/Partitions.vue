<template>
    <v-list>
        <v-list-group
            v-for="partition in partitions"
            :key="partition.partition"
            v-model="partition.active"
            prepend-icon="mdi-animation"
            no-action
        >
            <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title v-text="'Partition ' + partition.partition"></v-list-item-title>
                </v-list-item-content>
            </template>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-subtitle>Leader</v-list-item-subtitle>
                    <v-list-item-title>{{ partition.leader.host }}:{{ partition.leader.port }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-group>
<!--        <v-flex v-for="partition in partitions" v-bind:key="partition.id" xs8 md3>-->
<!--            <Partition-->
<!--                v-bind:id="partition.id"-->
<!--                v-bind:inSyncReplicas="partition.inSyncReplicas"-->
<!--                v-bind:leader="partition.leader"-->
<!--                v-bind:replicas="partition.replicas"-->
<!--            >-->
<!--            </Partition>-->
<!--        </v-flex>-->
    </v-list>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {TopicPartition} from "@/store/topics/types";
import Partition from "@/components/Partition.vue";

@Component({
    components: {Partition},
})
export default class Partitions extends Vue {

    @Prop()
    private partitions!: TopicPartition[];


}
</script>

<style scoped>

</style>