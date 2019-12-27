import {ConsumerGroupDescription, ConsumerGroupOffset, ConsumerGroup} from "./types";
import {Module} from "vuex";
import {RootState} from "@/store";

import * as actions from "./actions";
import * as mutations from "./mutations";

export interface ConsumerGroupsState {
    current: ConsumerGroupDescription | null;
    // configuration?: TopicConfigurationResponseDto;
    data: ConsumerGroup[] | null;
    offsets: ConsumerGroupOffset[] | null;
    loading: boolean;
    hasError: boolean;
    errorMessage?: string;
}

export const ConsumerGroupsModule: Module<ConsumerGroupsState, RootState> = {
    state: {
        current: null,
        // configuration: {},
        data: null,
        offsets: null,
        loading: false,
        hasError: false,
        errorMessage: undefined,
    },
    actions,
    mutations,
};