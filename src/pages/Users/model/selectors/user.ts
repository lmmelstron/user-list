import { StateSchema } from "@/app/providers/StoreProvider";

export const getIsLoading = (State: StateSchema) => State.user.isLoading;
export const getError = (State: StateSchema) => State.user.error;
export const getSearch = (State: StateSchema) => State.user.search;
