import {Module} from "vuex";
import {RootState} from "@/store";
import * as actions from "./actions";
import * as mutations from "./mutations";
import {SchemaDetail} from "./types";

export interface SchemaState {
    versions: { [versionName: string]: SchemaDetail };
    versionCount: number[] | null;
    loading: boolean;
}

export interface SubjectsState {
    schema: SchemaState;
    topic: { key: SchemaDetail | null; value: SchemaDetail | null };
    data: string[];
    loading: boolean;
    hasError: boolean;
    errorMessage?: string;
}

export const SubjectsModule: Module<SubjectsState, RootState> = {
    state: {
        schema: {
            versions: {},
            loading: false,
            versionCount: [],
        },
        topic: {
            key: null,
            value: null,
        },
        data: [],
        loading: false,
        hasError: false,
        errorMessage: undefined,
    },
    actions,
    mutations,
};
