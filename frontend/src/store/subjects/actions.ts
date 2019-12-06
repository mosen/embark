import {Action} from "vuex";
import {RootState} from "@/store";
import Axios from "axios";
import {SchemaDetail, Subject} from "@/store/subjects/types";
import {SubjectsState} from "@/store/subjects/index";

type SubjectAction = Action<SubjectsState, RootState>;

export const subjects: SubjectAction = async ({commit, rootState}): Promise<void> => {
    commit('subjectsRequested', { name });
    try {
        const response = await Axios.get<Subject[]>(`${rootState.endpoints.schemaRegistryApi}/subjects`, {
            headers: { "Accept": "application/vnd.schemaregistry.v1+json" }
        });
        commit('subjectsReplace', response.data);
    } catch (e) {
        commit('subjectsError', e);
    }
};

export const subjectSchemaVersion: SubjectAction = async ({commit, rootState}, name: string, version: string = "latest"): Promise<void> => {
    commit('subjectSchemaLatestRequested', { name });
    try {
        const response = await Axios.get<SchemaDetail>(`${rootState.endpoints.schemaRegistryApi}/subjects/${ name }/versions/${ version }`, {
            headers: { "Accept": "application/vnd.schemaregistry.v1+json" }
        });
        commit('subjectSchemaLatestReplace', response.data);
    } catch (e) {
        commit('subjectSchemaLatestError', e);
    }
};

