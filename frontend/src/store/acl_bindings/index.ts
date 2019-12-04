import {Module} from "vuex";
import {RootState} from "@/store";
import * as actions from "./actions";
import * as mutations from "./mutations";
import {AclBinding} from "@/store/acl_bindings/types";

export interface AclBindingsState {
    data?: AclBinding[];
    loading: boolean;
    hasError: boolean;
    errorMessage?: string;
}

export const AclBindingsModule: Module<AclBindingsState, RootState> = {
    state: {
        data: undefined,
        loading: false,
        hasError: false,
        errorMessage: undefined,
    },
    actions,
    mutations,
};
