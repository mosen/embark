<template>
    <v-container fluid class="terminal">
        <div v-for="(line, lineno) in output" :key="lineno" class="line">{{ line }}</div>
        <KSQLLineEditor @statement="parseStatement" @line="appendOutput" @clear="clearHistory" />
    </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {motd} from "@/ksql/constants";

import antlr4 from "antlr4";
import * as lexers from "@/ksql/src/ksql/SqlBaseLexer.js";
import * as parsers from "@/ksql/src/ksql/SqlBaseParser.js";
import * as listeners from "@/ksql/src/ksql/SqlBaseListener.js";
import {ErrorListener} from '@/ksql/ErrorListener';
import KSQLLineEditor from "@/components/KSQLLineEditor.vue";

@Component({
    components: {KSQLLineEditor},
})
export default class KSQL extends Vue {

    public get output() {
        return this.$store.state.ksql.terminal.lines;
    }

    public created() {
        this.$store.commit('appendLines', motd);
    }

    private parseStatement(statement: string[]) {
        this.parse(statement.join("\n"));
    }

    private appendOutput(line: string, prompt: string = "ksql> ") {
        this.$store.commit('appendLine', { line, prompt });
    }

    private clearHistory() {
        this.$store.commit('clearLines');
    }

    private parse(input: string) {
        const chars = new antlr4.InputStream(input);
        const lexer = new lexers.SqlBaseLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new parsers.SqlBaseParser(tokens);

        const errListener = new ErrorListener({ output: this.output });
        parser.removeErrorListeners();
        parser.addErrorListener(errListener);
        //
        // lexer.removeErrorListeners();
        // lexer.addErrorListener(errListener);

        const tree = parser.statement();
        // console.log(tree);

        this.$store.dispatch('ksql', input);
    }


}
</script>

<style>
    .terminal {
        height: 100%;
        background-color: black;
        color: whitesmoke;
        font-family: 'DejaVu Sans Mono', monospace;
        white-space: pre-wrap;
    }

    .terminal form {
      display: inline-block;
    }

    .line {

    }

    :focus {
        outline-color: transparent;
        outline-style: none;
    }
</style>
