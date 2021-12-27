import { createSlice } from "@reduxjs/toolkit";

export interface userState {
  name: string;
  email: string;
  readed: string;
  liked: string;
  img: string;
}

const initialState: userState = {
  name: "",
  email: "",
  readed: "",
  liked: "",
  img: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    loadingProfile: (state, action: any) => {
      return action.payload;
    },
  },
  extraReducers: {},
});

export const { loadingProfile } = profileSlice.actions;

export default profileSlice.reducer;
