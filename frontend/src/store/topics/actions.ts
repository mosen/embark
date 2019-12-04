import Axios from "axios";
import {
    CreateTopicRequestDto, NewTopic,
    TopicConfigurationResponseDto, TopicDescription,
    TopicDescriptionResponseDto, TopicListing,
} from "@/store/topics/types";
import {Action} from "vuex";
import {TopicsState} from "@/store/topics/index";
import {RootState} from "@/store";
import {ConfigEntry} from "@/store/types";

export const topics: Action<TopicsState, RootState> = async ({state, commit, rootState}): Promise<void> => {
    commit('topicsRequested');
    try {
        const response = await Axios.get<TopicListing[]>(`${rootState.endpoints.adminApi}/v1/topics`);
        commit('topicsReplace', response.data);
    } catch (e) {
        commit('topicsError', e);
    }
};

export const topic: Action<TopicsState, RootState> = async ({state, commit, rootState}, name: string): Promise<void> => {
    commit('topicRequested', { name });
    try {
        const response = await Axios.get<TopicDescriptionResponseDto>(`${rootState.endpoints.adminApi}/v1/topics/${name}`);
        commit('topicReplace', response.data);
    } catch (e) {
        commit('topicError', e);
    }
};

export const topicConfiguration: Action<TopicsState, RootState> = async ({state, commit, rootState}, name: string): Promise<void> => {
    commit('topicConfigurationRequested', { name });
    try {
        const response = await Axios.get<ConfigEntry[]>(`${rootState.endpoints.adminApi}/v1/topics/${name}/configuration`);
        commit('topicConfigurationReplace', response.data);
    } catch (e) {
        commit('topicConfigurationError', e);
    }
};

export const createTopic: Action<TopicsState, RootState> = async ({state, commit, rootState}, topicData: NewTopic) => {
    commit('topicCreateRequest', topicData);
    try {
        const response = await Axios.post<TopicDescription>(
            `${rootState.endpoints.adminApi}/v1/topics`, topicData);
        commit('topicCreated', response.data);
        commit('setSnackbarVisible', true);
        commit('setSnackbarText', `Created topic`);
    } catch (e) {
        commit('topicCreateError', e);
    }
};

export const confirmDeleteTopic: Action<TopicsState, RootState> = async ({ state, commit }, name: string) => {
    commit('confirmDeleteTopic', name);
};

export const deleteTopic: Action<TopicsState, RootState> = async ({state, commit, rootState}, name: string) => {
    commit('topicDeleteRequest', { name });
    try {
        const response = await Axios.delete<void>(`${rootState.endpoints.adminApi}/v1/topics/${name}`);
        commit('topicDeleted', { name });
        commit('setSnackbarVisible', true);
        commit('setSnackbarText', `Removed topic "${name}"`);
    } catch (e) {
        commit('topicDeleteError', e);
    }
};