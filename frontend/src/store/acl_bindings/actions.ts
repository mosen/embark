import {Action} from "vuex";
import {RootState} from "@/store";
import Axios from "axios";

import {AclBindingsState} from "@/store/acl_bindings/index";
import {AclBinding} from "@/store/acl_bindings/types";

type AclBindingAction = Action<AclBindingsState, RootState>;

export const aclBindings: AclBindingAction = async ({commit, rootState}, { resourceType, resource }): Promise<void> => {
    commit('aclBindingsRequested', { name });
    try {
        const response = await Axios.get<AclBinding[]>(`${rootState.endpoints.adminApi}/v1/acl-bindings`, {
            params: {
                resourceType,
                resource,
            }
        });
        commit('aclBindingsReplace', response.data);
    } catch (e) {
        commit('aclBindingsError', e);
    }
};
