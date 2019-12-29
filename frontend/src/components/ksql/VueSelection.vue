<template>
    <template>
        <slot />
    </template>
</template>

<script lang="ts">
import {Vue, Component, Emit, Watch, Prop} from 'vue-property-decorator';

/**
 * A Pseudo-Component to model selection state in the editor such that a Vue render can reposition the selection
 * based on props.
 */
@Component({
    components: {},
})
export default class VueSelection extends Vue {

    @Prop({ default: () => window.getSelection() })
    private readonly selection!: any;

    private range: Range | null = null;

    public mounted() {
        const selection = window.getSelection();
        if (selection !== null && selection.rangeCount === 1) {
            this.range = selection.getRangeAt(0);
        }
    }

}
</script>

<style scoped>

</style>