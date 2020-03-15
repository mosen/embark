import {Mutation} from "vuex";
import {SubjectsState} from "@/store/subjects/index";
import {SchemaDetail} from "./types";

export const subjects: Mutation<SubjectsState> = (state, payload: string[]): void => {
    state.data = payload;
};

export const schemaVersion: Mutation<SubjectsState> = (state, payload: SchemaDetail): void => {
    state.schema.versions[payload.version] = payload;
};

export const schemaVersions: Mutation<SubjectsState> = (state, payload: number[]): void => {
    state.schema.versionCount = payload;
};
