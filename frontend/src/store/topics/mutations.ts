import {Mutation} from "vuex";

import {
    TopicDescription,
    TopicListing,
} from "@/store/topics/types";
import {TopicsState} from "@/store/topics/index";
import {ConfigEntry} from "@/store/types";

export const topicsRequested: Mutation<TopicsState> = (state): void => {
    state.loading = true;
    state.hasError = false;
    state.errorMessage = "";
};

export const topicsError: Mutation<TopicsState> = (state, payload: Error): void => {
    state.loading = false;
    state.hasError = true;
    state.errorMessage = payload.message;
};

export const topicsReplace: Mutation<TopicsState> = (state, payload: TopicListing[]): void => {
    state.loading = false;
    state.hasError = false;
    state.errorMessage = "";
    state.data = payload;
};


export const topicRequested: Mutation<TopicsState> = (state, name: string): void => {
    state.loading = true;
};

export const topicError: Mutation<TopicsState> = (state, payload: Error): void => {
    state.loading = false;
    state.hasError = true;
    state.errorMessage = payload.message;
};

export const topicReplace: Mutation<TopicsState> = (state, payload: TopicDescription): void => {
    state.current = payload;
    state.loading = false;
    state.hasError = false;
};

export const topicConfigurationRequested: Mutation<TopicsState> = (state, name): void => {
    state.loading = true;
};

export const topicConfigurationError: Mutation<TopicsState> = (state, payload: Error): void => {
    state.loading = false;
    state.hasError = true;
    state.errorMessage = payload.message;
};

export const topicConfigurationReplace: Mutation<TopicsState> = (state, payload: ConfigEntry[]): void => {
    state.configuration = payload;
    state.loading = false;
    state.hasError = false;
};

export const topicCreateRequest: Mutation<TopicsState> = (state): void => {
    state.loading = true;
    state.hasError = false;
    state.errorMessage = "";
};

export const topicCreateError: Mutation<TopicsState> = (state, payload: Error): void => {
    state.hasError = true;
    state.errorMessage = payload.message;
};

export const topicCreated: Mutation<TopicsState> = (state, payload: TopicDescription): void => {
    state.hasError = false;
    state.loading = false;
    state.errorMessage = "";
    state.current = payload;
};

export const topicDeleteRequest: Mutation<TopicsState> = (state, payload: { name: string }): void => {
    state.loading = true;
};

export const topicDeleteError: Mutation<TopicsState> = (state, payload: Error): void => {
    state.loading = false;
    state.hasError = true;
    state.errorMessage = payload.message;
};

export const topicDeleted: Mutation<TopicsState> = (state, payload: { name: string }): void => {
    state.loading = false;
};

export const confirmDeleteTopic: Mutation<TopicsState> = (state, name: string): void => {
    state.deleteDialogVisible = true;
    state.deleteTopicName = name;
};

export const dismissDeleteTopic: Mutation<TopicsState> = (state): void => {
    state.deleteDialogVisible = false;
    state.deleteTopicName = "";
};

