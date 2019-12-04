import {Mutation} from "vuex";
import {ConsumerGroupsState} from "@/store/consumer_groups/index";
import {
    ConsumerGroupDescriptionResponseDto,
    ConsumerGroupOffsetsResponseDto,
    ConsumerGroupsResponseDto
} from "@/store/consumer_groups/types";
import {ErrorMutation, SuccessMutation} from "@/store/mutations";

export const consumerGroupsRequested: Mutation<ConsumerGroupsState> = (state): void => {
    state.loading = true;
    state.hasError = false;
    state.errorMessage = "";
};

export const consumerGroupsError: ErrorMutation<ConsumerGroupsState> = (state, payload: Error): void => {
    state.loading = false;
    state.hasError = true;
    state.errorMessage = payload.message;
};

export const consumerGroupsReplace: SuccessMutation<ConsumerGroupsState, ConsumerGroupsResponseDto> = (state, payload): void => {
    state.data = payload.data;
    state.loading = false;
    state.hasError = false;
};

export const consumerGroupRequested: Mutation<ConsumerGroupsState> = (state): void => {
    state.loading = true;
};

export const consumerGroupError: ErrorMutation<ConsumerGroupsState> = (state, payload: Error): void => {
    state.loading = false;
    state.hasError = true;
    state.errorMessage = payload.message;
};

export const consumerGroupReplace: SuccessMutation<ConsumerGroupsState, ConsumerGroupDescriptionResponseDto> = (state, payload): void => {
    state.current = payload.data;
    state.loading = false;
    state.hasError = false;
};

export const consumerGroupOffsetsRequested: Mutation<ConsumerGroupsState> = (state): void => {
    state.loading = true;
    state.hasError = false;
    state.errorMessage = "";
};

export const consumerGroupOffsetsError: ErrorMutation<ConsumerGroupsState> = (state, payload: Error): void => {
    state.loading = false;
    state.hasError = true;
    state.errorMessage = payload.message;
};

export const consumerGroupOffsetsReplace: SuccessMutation<ConsumerGroupsState, ConsumerGroupOffsetsResponseDto> = (state, payload): void => {
    state.offsets = payload.data;
    state.loading = false;
    state.hasError = false;
};
