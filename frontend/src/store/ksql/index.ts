import {KSQLServerInfo, KSQLStatementResult} from "@/store/ksql/types";
import {Module} from "vuex";
import {RootState} from "@/store";


import * as actions from "./actions";
import * as mutations from "./mutations";

export interface KSQLState {
    loading: boolean;
    results: KSQLStatementResult[];
    info: {
        loading: boolean;
        error: boolean;
        data: KSQLServerInfo | null;
    };
    query: string;
    terminal: {
        lines: string[];
    };
}

export const KSQLModule: Module<KSQLState, RootState> = {
    state: {
        loading: false,
        results: [],
        terminal: {
            lines: []
        },
        query: "",
        info: {
            loading: false,
            error: false,
            data: null,
        }
    },
    actions,
    mutations,
};