<template>
    <v-card>
        <v-card-text>
        {{ id }}

        <p>Leader: {{ leader.host }}:{{ leader.port }}</p></v-card-text>
    </v-card>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Node} from "@/store/topics/types";

@Component({
    components: {},
})
export default class Partition extends Vue {

    @Prop(Number)
    private readonly id?: number;

    @Prop({ default: [] })
    private readonly inSyncReplicas!: Node[];

    @Prop({ default: [] })
    private readonly replicas!: Node[];

    @Prop()
    private readonly leader?: Node;

}
</script>

<style scoped>

</style>