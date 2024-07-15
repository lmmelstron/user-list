import { userReducer, userSchema } from "@/pages/Users";
import { configureStore } from "@reduxjs/toolkit";

export interface StateSchema {
  user: userSchema;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  state: StateSchema;
}

export function createReduxStore() {
  const store = configureStore({
    reducer: { user: userReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
  });
  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
