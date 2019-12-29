<template>
    <div class="editor-statusbar pa-2">
        <div>{{ message }}</div>
        <div class="text-right">{{ column }}:{{ line }}</div>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Emit, Watch, Prop} from 'vue-property-decorator';

@Component({
    components: {},
})
export default class KSQLQueryStatusBar extends Vue {

    @Prop({ default: "" })
    private readonly message!: string;

    @Prop({ default: 1 })
    private readonly column!: number;

    @Prop({ default: 1 })
    private readonly line!: number;
}
</script>

<style scoped>
    .editor-statusbar {
        display: flex;
        background-color: #393939;
        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        font-size: 1em;
    }

    .editor-statusbar > div {
        flex-grow: 1;
    }
</style>