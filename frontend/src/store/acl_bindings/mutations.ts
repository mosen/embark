import {Mutation} from "vuex";
import {ErrorMutation, SuccessMutation} from "@/store/mutations";
import {AclBinding} from "./types";
import {AclBindingsState} from "@/store/acl_bindings/index";


export const aclBindingsRequested: Mutation<AclBindingsState> = (state): void => {
    state.loading = true;
    state.hasError = false;
    state.errorMessage = "";
};

export const aclBindingsError: ErrorMutation<AclBindingsState> = (state, payload: Error): void => {
    state.loading = false;
    state.hasError = true;
    state.errorMessage = payload.message;
};

export const aclBindingsReplace: SuccessMutation<AclBindingsState, AclBinding[]> = (state, payload): void => {
    state.data = payload.data;
    state.loading = false;
    state.hasError = false;
};
