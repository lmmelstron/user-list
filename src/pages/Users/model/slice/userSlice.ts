import { StateSchema } from "@/app/providers/StoreProvider";
import { IUser } from "@/entities/User";
import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import fetchUsers from "../services/fetchUsers/fetchUsers";
import { userSchema } from "../types/userSchema";

const userAdapter = createEntityAdapter({
  selectId: (user: IUser) => String(user.id),
});

export const getUsers = userAdapter.getSelectors<StateSchema>(
  (state) => state.user || userAdapter.getInitialState()
);
export const userSlice = createSlice({
  name: "user",
  initialState: userAdapter.getInitialState<userSchema>({
    isLoading: false,
    ids: [],
    entities: {},
    search: "",
  }),
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<IUser[]>) => {
          state.isLoading = false;
          userAdapter.setAll(state, action.payload);
        }
      )
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
