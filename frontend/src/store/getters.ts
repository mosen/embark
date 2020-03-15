import {Getter} from "vuex";
import {RootState} from "@/store/index";

export const componentError: Getter<RootState, RootState> =
    (state) => (component: string): Error | null => state.errors[component];

export const isLoading: Getter<RootState, RootState> =
    (state) => (component: string): boolean => state.loading[component] ?? false;
