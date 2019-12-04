<template>
    <v-card>
        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title class="headline">{ host }</v-list-item-title>
                <v-list-item-subtitle>IP Address</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class NodeCard extends Vue {
    @Prop() private hasRack!: boolean;
    @Prop() private host!: string;
    @Prop() private id!: number;
    @Prop() private port!: number;
}
</script>

<style scoped>

</style>