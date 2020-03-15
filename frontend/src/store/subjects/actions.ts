import {Action} from "vuex";
import {RootState} from "@/store";
import Axios from "axios";
import {SchemaDetail} from "@/store/subjects/types";
import {SubjectsState} from "@/store/subjects/index";

type SubjectAction = Action<SubjectsState, RootState>;

const headers = {
    "Accept": "application/vnd.schemaregistry.v1+json"
};

// Fetch a list of subjects.
export const subjects: SubjectAction = async ({commit, rootState}): Promise<void> => {
    commit('loading', { component: 'subjects' });
    try {
        const response = await Axios.get<string[]>(`${rootState.endpoints.schemaRegistryApi}/subjects`, {
            headers,
        });
        commit('subjects', response.data);
        commit('error', { component: 'subjects' });
    } catch (e) {
        commit('error', { component: 'subjects', error: e });
    }

    commit('loading', { component: 'subjects', loading: false });
};

export interface SchemaVersionPayload {
    subject: string;
    version: string;
}

// Fetch a specific version of a schema for the given subject.
export const schemaVersion: SubjectAction =
    async ({commit, rootState}, { subject, version = "latest" }: SchemaVersionPayload): Promise<void> => {

    commit('loading', { component: 'schemaVersion', subject, version, loading: true });
    try {
        const response = await Axios.get<SchemaDetail>(
            `${rootState.endpoints.schemaRegistryApi}/subjects/${ subject }/versions/${ version }`,
            { headers }
            );
        commit('schemaVersion', response.data);
        commit('error', { component: 'schemaVersion' });
    } catch (e) {
        commit('error', { component: 'schemaVersion', error: e });
    }

    commit('loading', { component: 'schemaVersion', loading: false });
};

// Fetch a list of available schema versions for a specific subject.
export const schemaVersions: SubjectAction =
    async ({commit, rootState}, subject: string): Promise<void> => {

        commit('loading', { component: 'schemaVersions', subject, loading: true });
        try {
            const response = await Axios.get<SchemaDetail>(
                `${rootState.endpoints.schemaRegistryApi}/subjects/${ subject }/versions`,
                { headers }
            );
            commit('schemaVersions', response.data);
        } catch (e) {
            commit('error', { component: 'schemaVersions', error: e });
        }
};

// Given a topic name, check to see whether the key and value schemas are available.
export const topicSchemas: SubjectAction =
    async ({commit, rootState, dispatch}, topic: string, version = "latest"): Promise<void> => {

        commit('loading', { component: 'topicSchemas', topic, loading: true });

        const keySchema = await dispatch("schemaVersion", { subject: `${ topic }-key`, version });
        const valueSchema = await dispatch("schemaVersion", { subject: `${ topic }-value`, version });
};