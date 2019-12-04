<template>
    <v-card>
        <v-card-text>
        {{ id }}

        <p>Leader: {{ leader.host }}:{{ leader.port }}</p></v-card-text>
    </v-card>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {KafkaNode} from "@/store/topics/types";

@Component({
    components: {},
})
export default class Partition extends Vue {

    @Prop(Number)
    private readonly id?: number;

    @Prop({ default: [] })
    private readonly inSyncReplicas!: KafkaNode[];

    @Prop({ default: [] })
    private readonly replicas!: KafkaNode[];

    @Prop()
    private readonly leader?: KafkaNode;

}
</script>

<style scoped>

</style>