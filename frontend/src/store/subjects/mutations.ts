import {Mutation} from "vuex";
import {ErrorMutation} from "@/store/mutations";
import {SubjectsState} from "@/store/subjects/index";
import {SchemaDetail} from "./types";


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
    state.schema.loading = true;
};

export const subjectSchemaVersionError: ErrorMutation<SubjectsState> = (state, payload: Error): void => {
    state.hasError = true;
    state.schema.loading = false;
    state.errorMessage = payload.message;
};

export const subjectSchemaVersionReplace: Mutation<SubjectsState> = (state, payload: SchemaDetail): void => {
    state.schema.versions[payload.version] = payload;
    state.schema.loading = false;
    state.hasError = false;
};

export const schemaVersionsRequested: Mutation<SubjectsState> = (state, payload: { subject: string; version: string }): void => {
    state.schema.loading = false;
};

export const schemaVersionsReplace: Mutation<SubjectsState> = (state, payload: number[]): void => {
    state.schema.versionCount = payload;
};

export const topicKeySchemaReplace: Mutation<SubjectsState> = (state, payload: SchemaDetail): void => {
    state.topic.key = payload;
};

export const topicValueSchemaReplace: Mutation<SubjectsState> = (state, payload: SchemaDetail): void => {
    state.topic.value = payload;
};
