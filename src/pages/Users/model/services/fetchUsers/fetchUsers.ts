import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { IUser } from "@/entities/User";

const fetchUsers = createAsyncThunk<
  IUser[],
  number | undefined,
  ThunkConfig<string>
>("user/fetchUsers", async (limit = 9, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const response = await fetch(
      `https://fakestoreapi.com/users?limit=${limit}`
    );

    if (!response.ok) throw new Error();

    return await response.json();
  } catch {
    return rejectWithValue("Failed to fetch");
  }
});

export default fetchUsers;
