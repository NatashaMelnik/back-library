import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signIn } from "./loginAPI";

export interface userState {
  email: string | null;
  id: number | null;
}

const initialState: userState = {
  email: "",
  id: null,
};

export const loginUser = createAsyncThunk("user/login", async (body: any) => {
  try {
    const response = await signIn(body);
    return response;
  } catch (e: any) {
    console.log("Error", e.response.data);
  }
});

export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadingUser: (state, action: any) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
  },
  extraReducers: {},
});

export const { loadingUser } = loginSlice.actions;

export default loginSlice.reducer;
// export const userSelector = (state: { user: any }) => state.user;
