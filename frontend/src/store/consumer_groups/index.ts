import {ConsumerGroupDescriptionResponseDto, ConsumerGroupOffsetsResponseDto, ConsumerGroupsResponseDto} from "./types";
import {Module} from "vuex";
import {RootState} from "@/store";

import * as actions from "./actions";
import * as mutations from "./mutations";

export interface ConsumerGroupsState {
    current?: ConsumerGroupDescriptionResponseDto;
    // configuration?: TopicConfigurationResponseDto;
    data?: ConsumerGroupsResponseDto;
    offsets?: ConsumerGroupOffsetsResponseDto;
    loading: boolean;
    hasError: boolean;
    errorMessage?: string;
}

export const ConsumerGroupsModule: Module<ConsumerGroupsState, RootState> = {
    state: {
        current: undefined,
        // configuration: {},
        data: undefined,
        offsets: undefined,
        loading: false,
        hasError: false,
        errorMessage: undefined,
    },
    actions,
    mutations,
};