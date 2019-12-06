import {Mutation} from "vuex";
import {ErrorMutation, SuccessMutation} from "@/store/mutations";
import {SubjectsState} from "@/store/subjects/index";
import {SchemaDetail, Subject} from "./types";


export const subjectsRequested: Mutation<SubjectsState> = (state): void => {
    state.loading = true;
    state.hasError = false;
    state.errorMessage = "";
};

export const subjectsError: ErrorMutation<SubjectsState> = (state, payload: Error): void => {
    state.loading = false;
    state.hasError = true;
    state.errorMessage = payload.message;
};

export const subjectsReplace: SuccessMutation<SubjectsState, Subject[]> = (state, payload): void => {
    state.data = payload.data;
    state.loading = false;
    state.hasError = false;
};

export const subjectSchemaLatestRequested: Mutation<SubjectsState> = (state): void => {
    state.loading = true;
};

export const subjectSchemaLatestError: ErrorMutation<SubjectsState> = (state, payload: Error): void => {
    state.loading = false;
    state.hasError = true;
    state.errorMessage = payload.message;
};

export const subjectSchemaLatestReplace: SuccessMutation<SubjectsState, SchemaDetail> = (state, payload): void => {
    state.latestSchema = payload.data;
    state.loading = false;
    state.hasError = false;
};

