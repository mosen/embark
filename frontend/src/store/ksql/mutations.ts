import {Mutation} from "vuex";
import {ErrorMutation, SuccessMutation} from "@/store/mutations";
import {KSQLState} from "@/store/ksql/index";
import {KSQLServerInfoDto, KSQLStatementResult} from "@/store/ksql/types";
import {formatStreams, table} from "@/store/ksql/console";

export const ksqlSubmit: Mutation<KSQLState> = (state): void => {
    state.loading = true;
};

export const ksqlError: ErrorMutation<KSQLState> = (state, payload: Error): void => {
    state.loading = false;
    console.error(payload);
};

export const ksqlResult: Mutation<KSQLState> = (state, payload: KSQLStatementResult[]): void => {
    for (let item of payload) {
        if (item.streams) {
            const columns = ['name', 'topic', 'format'];
            const descriptions = { name: 'Stream Name', topic: 'Kafka Topic', format: 'Format' };
            state.terminal.lines = state.terminal.lines.concat(table(item.streams, columns, descriptions));
        } else if (item.properties) {
            const columns = ['property', 'value'];
            const descriptions = { property: 'Property', value: 'Effective Value'};
            const data = Object.keys(item.properties).map((k) => {
                return { 'property': k, 'value': item.properties[k] };
            });
            state.terminal.lines = state.terminal.lines.concat(table(data, columns, descriptions));
        }
    }

    state.loading = false;
};

export const appendLine: Mutation<KSQLState> = (state, payload: { prompt: string; line: string }) => {
    state.terminal.lines.push(`${payload.prompt}${payload.line}`);
};

export const appendLines: Mutation<KSQLState> = (state, lines: string[]) => {
    state.terminal.lines = state.terminal.lines.concat(lines);
};

export const clearLines: Mutation<KSQLState> = (state) => {
    state.terminal.lines = [];
};

export const ksqlInfoRequest: Mutation<KSQLState> = (state) => {
    state.info.loading = true;
};

export const ksqlInfoError: Mutation<KSQLState> = (state, payload: Error) => {
    state.info.error = true;
    state.info.loading = false;
};

export const ksqlInfoResult: Mutation<KSQLState> = (state, payload: KSQLServerInfoDto) => {
    state.info.data = payload;
    state.info.loading = false;
    state.info.error = false;
};