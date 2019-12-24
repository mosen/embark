<template>
    <div>
        <v-row>
            <v-col cols="12">
                <KSQLQueryContent
                        @validate="validate"
                        @execute="execute"
                />
            </v-col>
        </v-row>
        <v-row dense>
            <v-col>
                {{ validationErrors }}
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <KSQLResultsPane
                        :results="results"
                        />
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import KSQLResultsPane from "@/components/ksql/KSQLResultsPane.vue";
    import KSQLQueryContent from "@/components/ksql/KSQLQueryContent.vue";

    import antlr4, {Token} from "antlr4";
    import * as lexers from "@/ksql/src/ksql/SqlBaseLexer.js";
    import * as parsers from "@/ksql/src/ksql/SqlBaseParser.js";
    // import * as listeners from "@/ksql/src/ksql/SqlBaseListener.js";
    import {ErrorListenerInterface} from "@/ksql/ErrorListener";
    import {KSQLStatementResult} from "@/store/ksql/types";

    @Component({
        components: {KSQLQueryContent, KSQLResultsPane}
    })
    export default class KSQLQueryEditor extends Vue implements ErrorListenerInterface {

        private validationErrors: any = [];

        private get results(): KSQLStatementResult[] {
            return this.$store.state.ksql.results;
        }

        public execute(queryText: string) {
            this.$store.dispatch('ksql', queryText);
        }

        public validate(query: string) {
            this.validationErrors = [];

            const chars = new antlr4.InputStream(query);
            const lexer = new lexers.SqlBaseLexer(chars);
            const tokens = new antlr4.CommonTokenStream(lexer);
            const parser = new parsers.SqlBaseParser(tokens);

            parser.removeErrorListeners();
            parser.addErrorListener(this);

            //
            // lexer.removeErrorListeners();
            // lexer.addErrorListener(errListener);

            const tree = parser.statement();
            console.log('tree follows');
            console.log(tree);

        }

        private reportAmbiguity(recognizer: any, dfa: any, startIndex: number, stopIndex: number, exact: any, ambigAlts: any, configs: any): void {
            console.log('reportAmbiguity');
        }

        private reportAttemptingFullContext(recognizer: any, dfa: any, startIndex: number, stopIndex: number, conflictingAlts: any, configs: any): void {
            console.log('reportAttemptingFullContext');
        }

        private reportContextSensitivity(recognizer: any, dfa: any, startIndex: number, stopIndex: number, prediction: any, configs: any): void {
            console.log('reportContextSensitivity');
        }

        private syntaxError(recognizer: any, offendingSymbol: Token, line: number, column: number, msg: string, e: Error): void {
            this.validationErrors.unshift({ line, column, msg });
        }

    }
</script>

<style scoped>

</style>