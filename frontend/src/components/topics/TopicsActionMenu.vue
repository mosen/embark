<template>
    <v-menu offset-y>
        <template v-slot:activator="{ on }">
            <v-btn
                    color="primary"
                    dark
                    v-on="on"
            >
                <span v-if="selectionCount === 0">No items selected</span>
                <span v-else-if="selectionCount === 1">With one item</span>
                <span v-else>With {{selectionCount}} items</span>
            </v-btn>
        </template>
        <v-list two-line>
            <v-list-item
                    two-line
                    @click="deleteSelection"
                    :disabled="selectionCount === 0"
            >
                <v-list-item-icon>
                    <v-icon large class="text-center">mdi-trash-can</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Delete</v-list-item-title>
                    <v-list-item-subtitle>Delete {{ selectionCount }}  selected topic(s)</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from "vue-property-decorator";

@Component({
    components: {}
})
export default class TopicsActionMenu extends Vue {

    @Prop({ default: [] })
    private readonly selection!: string[];

    @Emit()
    public deleteSelection() {
        return this.selection;
    }

    private get selectionCount(): number {
        return this.selection ? this.selection.length : 0;
    }
}
</script>

<style scoped>

</style>