import defaultGrammar from "./prism-ksql";

export interface Rule {
    pattern: RegExp;
    greedy?: boolean;
    lookbehind?: boolean;
    // inside is essentially a lexer mode / context
    inside?: Grammar;
    alias?: string;
}

export type Rules = Array<Rule | RegExp> | RegExp | Rule;

export interface Grammar {
    [ruleName: string]: Rules;
}

export interface Match {
    type: string;
    content: string | Match[];
    alias?: string;
    matchedStr: string;
    greedy: boolean;
}

export const isRule = (rule: RegExp | Rule): rule is Rule => rule.hasOwnProperty('pattern');
export const isMatch = (match: Match | string): match is Match => match.hasOwnProperty('type');

export type MatchTuple = [string | null, Match | null, string | null];

/**
 * Match the next rule in the input given by {text}.
 *
 * This function returns a 3-tuple which enables it to be recursive. The tuple contains:
 *
 * [0] - Text that did not match any grammar rule prior to the first match.
 * [1] - The current match (if any)
 * [2] - A slice of all the input after the current match which can be fed back into this function recursively to
 *       discover all tokens.
 *
 * When the final match has been made (the base case), there will be no Match object (null) and no Tail object (null) if
 * there are trailing characters, or if the last piece of text in the input is a rule, there will be a match with no tail.
 *
 * Therefore, we can say that the recursion is finished when Tail is null.
 *
 * @param {string} text
 * @param {Grammar} grammar
 * @returns A 3-tuple of [<unmatched text>, <match object>, <tail>]
 */
export const match = (text: string | null, grammar: Grammar): MatchTuple => {
    if (text === null || text === "") { return [null, null, null]; }

    let head: string | null;
    let token: Match | null = null;
    let tail: string | null = null;

    for (let ruleSetName in grammar) {
        if (!grammar.hasOwnProperty(ruleSetName) || !grammar[ruleSetName]) continue;

        let rules: Rules = grammar[ruleSetName];
        const ruleSet: Array<RegExp | Rule> = Array.isArray(rules) ? rules : [rules];

        // TODO: rule.greedy
        // TODO: rule.lookbehind

        for (let rule of ruleSet) {
            let regex: RegExp = isRule(rule) ? rule.pattern : rule;
            let lookbehindLength = 0;

            // if (isRule(rule) && rule.greedy && !rule.pattern.global) {
            //     // Make it global
            // }

            let result = regex.exec(text);
            if (!result) { continue; }

            // if (lookbehind) {
            //     lookbehindLength = match[1] ? match[1].length : 0;
            // }

            const firstResult: string = result[0].slice(lookbehindLength);

            let insideResults: Match[] | null = [];
            if (isRule(rule) && rule.inside) {
                let insideHead: string | null;
                let insideMatch: Match | null;
                let insideTail: string | null = firstResult;
                do {
                    [insideHead, insideMatch, insideTail] = match(insideTail, rule.inside);
                    if (insideMatch !== null) { insideResults.push(insideMatch); }
                } while (insideTail !== null);
            } else {
                insideResults = null;
            }

            token = {
                type: ruleSetName,
                content: insideResults && insideResults.length > 0 ? insideResults: firstResult,
                matchedStr: firstResult,
                greedy: false,
            };

            if (isRule(rule)) { token.alias = rule.alias; }

            head = text.substr(0, result.index);
            tail = text.substr(result.index + firstResult.length);
            return [head, token, tail];
        }
    }

    // Rules have been exhausted so there musn't be any more grammar, only text
    head = text;
    return [head, token, tail];

};

export const htmlize = (matches: Array<Match | string>): string[] => {
    let output: string[] = [];

    for (let match of matches) {
        if (isMatch(match)) {

            // const content: string = isMatch(match.content) ? htmlize(match.content) : match.content;
            const ctx = {
                tag: 'span',
                classes: ['token', match.type],
                content: match.content,
            };

            output.push(`<${ctx.tag} class="${ctx.classes.join(' ')}">${ctx.content}</${ctx.tag}>`);
        } else {
            output.push(match);
        }
    }

    return output;
};

export const tokenize = (text: string, grammar: any = defaultGrammar): Array<Match | string> => {
    let tokens: Array<Match | string> = [];
    let rest: string | null = text;

    do {
        let [head, token, tail] = match(rest, grammar);

        // At this stage, head could still contain unprocessed rules depending on the order of rules.
        if (head) {
            // const [headHead, headTokens, headTail] = tokenize(head);
            // tokens.push(headHead);
            // tokens.push(headTokens);
            // tokens.push(headTail);
            tokens.push(head);
        }
        if (token) { tokens.push(token); }

        rest = tail;
    } while (rest !== null && rest !== "");

    return tokens;
};

//
// export const highlight = (text: string, grammar: any = defaultGrammar, language: string = "ksql"): string => {
//     if (text.length === 0) return "";
//
//     const tokens = tokenize(text, grammar);
//
// };