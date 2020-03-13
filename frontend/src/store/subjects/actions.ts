import {Action} from "vuex";
import {RootState} from "@/store";
import Axios from "axios";
import {SchemaDetail} from "@/store/subjects/types";
import {SubjectsState} from "@/store/subjects/index";

type SubjectAction = Action<SubjectsState, RootState>;

const headers = {
    "Accept": "application/vnd.schemaregistry.v1+json"
};

export const subjects: SubjectAction = async ({commit, rootState}): Promise<void> => {
    commit('subjectsRequested', { name });
    try {
        const response = await Axios.get<string[]>(`${rootState.endpoints.schemaRegistryApi}/subjects`, {
            headers,
        });
        commit('subjectsReplace', response.data);
    } catch (e) {
        commit('subjectsError', e);
    }
};

export const subjectSchemaVersion: SubjectAction =
    async ({commit, rootState}, { subject, version = "latest" }: { subject: string; version: string }): Promise<void> => {

    commit('subjectSchemaVersionRequested', { subject, version });
    try {
        const response = await Axios.get<SchemaDetail>(
            `${rootState.endpoints.schemaRegistryApi}/subjects/${ subject }/versions/${ version }`,
            { headers }
            );
        commit('subjectSchemaVersionReplace', response.data);
    } catch (e) {
        commit('subjectSchemaVersionError', e);
    }
};

export const schemaVersions: SubjectAction =
    async ({commit, rootState}, subject: string): Promise<void> => {

        commit('schemaVersionsRequested', { subject });
        try {
            const response = await Axios.get<SchemaDetail>(
                `${rootState.endpoints.schemaRegistryApi}/subjects/${ subject }/versions`,
                { headers }
            );
            commit('schemaVersionsReplace', response.data);
        } catch (e) {
            commit('schemaVersionsError', e);
        }
};

export const topicSchemas: SubjectAction =
    async ({commit, rootState}, topic: string, version = "latest"): Promise<void> => {

        commit('topicSchemasRequested', { topic, version });

        try {
            commit('topicKeySchemaRequested', { topic, version });
            const keyResponse = await Axios.get<SchemaDetail>(
                `${rootState.endpoints.schemaRegistryApi}/subjects/${ topic }-key/versions/${ version }`,
                { headers }
            );
            commit('topicKeySchemaReplace', keyResponse.data);
        } catch (e) {
            commit('topicKeySchemaError', e);
        }

        try {
            commit('topicValueSchemaRequested', { topic, version });
            const valueResponse = await Axios.get<SchemaDetail>(
                `${rootState.endpoints.schemaRegistryApi}/subjects/${ topic }-value/versions/${ version }`,
                { headers }
            );
            commit('topicValueSchemaReplace', valueResponse.data);
        } catch (e) {
            commit('topicValueSchemaError', e);
        }
};