
import { Token } from "antlr4";

export interface ErrorListenerOptions {
    output: string[];
}

export class ErrorListener {

    private output: string[];

    public constructor(options: ErrorListenerOptions) {
        this.output = options.output;
    }

    public syntaxError(recognizer, offendingSymbol: Token, line: number, column: number, msg: string, e: Error) {
        console.debug('syntaxError');
        console.log(arguments);
        this.output.push(msg);
    }

    public reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
        console.debug('reportAmbiguity');
    }

    public reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
        console.debug('reportAttemptingFullContext');
    }

    public reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
        console.debug('reportContextSensitivity');
    }
}
