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

export const subjectsReplace: Mutation<SubjectsState> = (state, payload: string[]): void => {
    state.data = payload;
    state.loading = false;
    state.hasError = false;
};

export const subjectSchemaVersionRequested: Mutation<SubjectsState> = (state, payload: { subject: string; version: string }): void => {
    state.schema.loading = [payload.version];
};

export const subjectSchemaVersionError: ErrorMutation<SubjectsState> = (state, payload: Error): void => {
    state.hasError = true;
    state.schema.loading = [];
    state.errorMessage = payload.message;
};

export const subjectSchemaVersionReplace: Mutation<SubjectsState> = (state, payload: SchemaDetail): void => {
    state.schema.versions["latest"] = payload;
    state.schema.loading = [];
    state.hasError = false;
};

