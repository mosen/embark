<template>
    <div class="line">
        <span :color="promptColor" class="prompt">{{ currentPrompt }}</span>
        <form @submit.prevent="submit">
            <input type="text"
                   ref="prompt"
                   class="prompt-input"
                   v-model="model"
                   @keyup.up.prevent="historyPrev"
                   @keyup.down.prevent="historyNext"
                   @keyup.ctrl.65.exact="setCursorStart"
                   @keyup.ctrl.69.exact="setCursorEnd"
                   @keyup.ctrl.76.exact="clearHistory"
                   autofocus />
        </form>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';

@Component({
    components: {},
})
export default class KSQLLineEditor extends Vue {

    @Prop({ default: 'ksql> ' })
    private prompt!: string;

    @Prop({ default: '> ' })
    private lineContinuationPrompt!: string;

    @Prop({ default: 'yellow' })
    private promptColor!: string;

    @Prop({ default: ';' })
    private statementTerminator!: string;

    @Prop({ default: 10 })
    private historySize!: number;

    // Holds current line only
    private model: string = "";

    // If statement is unterminated, holds all the parts up until now.
    private statement: string[] = [];

    private history: string[] = [];
    private historyIndex: number = 0;

    public get currentPrompt(): string {
        return this.statement.length === 0
            ? this.prompt
            : this.lineContinuationPrompt;
    }

    public historyPrev() {
        console.debug("Using previous history");
        console.log(this.history);

        // Can't go beyond the start of history
        if (this.historyIndex >= this.history.length) {
            console.debug('Reached start of history');
            return;
        }

        this.model = this.history[this.history.length - 1 - this.historyIndex++];
    }

    public historyNext() {
        console.debug("Using next history");

        if (this.historyIndex === 0) {
            this.model = this.history[0];
            console.debug('Cant go beyond end of history');
            return;
        }

        this.model = this.history[this.history.length - 1 - this.historyIndex--];
    }

    public setCursorStart() {
        // this.$refs.prompt.setSelectionRange(0, 0);
        console.debug("Set cursor to start of line");
    }

    public setCursorEnd() {
        console.debug("Set cursor to end of line");
    }

    public focusInput() {
        this.$refs.prompt.focus();
    }

    @Emit('statement')
    private statementEnded(): string[] {
        console.log('End of statement');
        return this.statement.concat([]);
    }

    @Emit('line')
    private lineEnded(): string {
        console.debug('End of line');
        this.history.push(this.model);
        return this.model;
    }

    @Emit('clear')
    private clearHistory(): boolean {
        return true;
    }

    public submit() {
        this.statement.push(this.model);

        if (this.model[this.model.length - 1] === ';') {
            this.statementEnded();
            this.statement = [];
        }

        this.lineEnded();
        this.model = "";
    }
}
</script>

<style scoped>
    .prompt {
        color: yellow;
    }
</style>