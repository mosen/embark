import {
    TopicDescription,
    TopicListing
} from "./types";
import {Module} from "vuex";

import * as actions from "./actions";
import * as mutations from "./mutations";
import {RootState} from "@/store";
import {ConfigEntry} from "@/store/types";


export interface TopicsState {
    current?: TopicDescription;
    configuration?: ConfigEntry[];
    data: TopicListing[] | null;
    loading: boolean;
    hasError: boolean;
    errorMessage?: string;
    deleteDialogVisible: boolean;
    deleteTopicName: string;
}

export const TopicsModule: Module<TopicsState, RootState> = {
    state: {
        current: undefined,
        configuration: [],
        data: null,
        loading: false,
        hasError: false,
        errorMessage: undefined,
        deleteDialogVisible: false,
        deleteTopicName: "",
    },
    actions,
    mutations,
};
