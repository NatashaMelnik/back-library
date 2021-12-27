import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../../app/store';
import Test from './test.model';
import { postTest } from './createTestAPI';

const initialState: Test[] = [];

export const addTest = createAsyncThunk("test/create", async (body: any) => {
	try {
		const response = await postTest(body);
		return response;
	} catch (e: any) {
		console.log("Error", e.response.data);
	}
});

export const createTestSlice = createSlice({
  name: 'create-test',
  initialState,
  reducers: {
    createTest: (state, {type, payload}) => {
      state.push(payload);
    }
  }
});

export const { createTest } = createTestSlice.actions;

export const selectTest = (state: RootState) => state;

export default createTestSlice.reducer;