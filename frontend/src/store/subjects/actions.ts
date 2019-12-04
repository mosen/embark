import {Action} from "vuex";
import {RootState} from "@/store";
import Axios from "axios";
import {SchemaDetailResponseDto, SubjectsResponseDto} from "@/store/subjects/types";
import {SubjectsState} from "@/store/subjects/index";

type SubjectAction = Action<SubjectsState, RootState>;

export const subjects: SubjectAction = async ({commit, rootState}): Promise<void> => {
    commit('subjectsRequested', { name });
    try {
        const response = await Axios.get<SubjectsResponseDto>(`${rootState.endpoints.schemaRegistryApi}/v1/subjects`);
        commit('subjectsReplace', response.data);
    } catch (e) {
        commit('subjectsError', e);
    }
};

export const subjectSchemaLatest: SubjectAction = async ({commit, rootState}, name: string): Promise<void> => {
    commit('subjectSchemaLatestRequested', { name });
    try {
        const response = await Axios.get<SchemaDetailResponseDto>(`${rootState.endpoints.schemaRegistryApi}/v1/subjects/${ name }/versions/latest`);
        commit('subjectSchemaLatestReplace', response.data);
    } catch (e) {
        commit('subjectSchemaLatestError', e);
    }
};

