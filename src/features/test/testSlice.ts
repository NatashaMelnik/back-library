import { createSlice } from "@reduxjs/toolkit";

export interface userState {
	title: string;
	desc: string;
	uuid: string;
}

const initialState: userState = {
	title: "",
	desc: "",
	uuid: "",
};

export const loginSlice = createSlice({
	name: "test",
	initialState,
	reducers: {
		loadingTest: (state, action: any) => {
			return action.payload;
		},
	},
	extraReducers: {},
});

export const { loadingTest } = loginSlice.actions;

export default loginSlice.reducer;
