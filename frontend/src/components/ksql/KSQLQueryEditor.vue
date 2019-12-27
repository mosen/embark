<template>
    <div>
        <v-row>
            <v-col cols="12">
                <KSQLQueryContent
                        @validate="validate"
                        @execute="execute"
                >
                    <template v-slot:before-editor>
                        <KSQLQueryToolbar @execute="execute" @check="validate" />
                    </template>
                </KSQLQueryContent>
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
    import KSQLQueryToolbar from "@/components/ksql/KSQLQueryToolbar.vue";

    import {ANTLRErrorListener, ANTLRInputStream, CommonTokenStream, RecognitionException, Token, CharStreams} from 'antlr4ts';
    import {SqlBaseLexer} from "@/ksql/SqlBaseLexer";
    import {SqlBaseParser} from "@/ksql/SqlBaseParser";
    // import {SqlBaseListener} from "@/ksql/SqlBaseListener";

    import {KSQLStatementResult} from "@/store/ksql/types";

    @Component({
        components: {KSQLQueryContent, KSQLResultsPane, KSQLQueryToolbar}
    })
    export default class KSQLQueryEditor extends Vue implements ANTLRErrorListener<Token> {

        private validationErrors: any = [];

        private get results(): KSQLStatementResult[] {
            return this.$store.state.ksql.results;
        }

        public execute(queryText: string) {
            this.$store.dispatch('ksql', queryText);
        }

        public validate(query: string) {
            this.validationErrors = [];

            const inputStream = new ANTLRInputStream(query);
            const lexer = new SqlBaseLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new SqlBaseParser(tokenStream);

            parser.removeErrorListeners();
            parser.addErrorListener(this);

            const tree = parser.statement();
            console.log('tree follows');
            console.log(tree);

        }

        reportAmbiguity(recognizer: any, dfa: any, startIndex: number, stopIndex: number, exact: any, ambigAlts: any, configs: any): void {
            console.log('reportAmbiguity');
        }

        reportAttemptingFullContext(recognizer: any, dfa: any, startIndex: number, stopIndex: number, conflictingAlts: any, configs: any): void {
            console.log('reportAttemptingFullContext');
        }

        reportContextSensitivity(recognizer: any, dfa: any, startIndex: number, stopIndex: number, prediction: any, configs: any): void {
            console.log('reportContextSensitivity');
        }

        syntaxError<T>(recognizer: any, offendingSymbol: T | undefined, line: number, column: number, msg: string, e: RecognitionException | undefined): void {
            this.validationErrors.unshift({ line, column, msg });
        }

    }
</script>

<style scoped>

</style>