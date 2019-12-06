import {Module} from "vuex";
import {RootState} from "@/store";
import * as actions from "./actions";
import * as mutations from "./mutations";
import {SchemaDetail, Subject} from "./types";

export interface SubjectsState {
    latestSchema?: SchemaDetail;
    data?: Subject[];
    loading: boolean;
    hasError: boolean;
    errorMessage?: string;
}

export const SubjectsModule: Module<SubjectsState, RootState> = {
    state: {
        latestSchema: undefined,
        data: undefined,
        loading: false,
        hasError: false,
        errorMessage: undefined,
    },
    actions,
    mutations,
};
