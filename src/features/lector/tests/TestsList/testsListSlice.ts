import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { loadTests } from "./testsListAPI";
const url = "http://localhost:3000/tests";
interface Question {
  question: string;
  max_score: number;
}
interface Test {
  title: string;
  description: string;
  owner: string;
  questions: Array<Question>;
}

interface Tests {
  testsList: Array<Test>;
}

const initialState: Tests = {
  testsList: [],
};

export const fetchTestsLists = createAsyncThunk("tests/load", async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (e) {
    console.log(e);
  }
});

export const TestsListSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {
    refreshTestsList: (state, action) => {
      state.testsList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTestsLists.fulfilled, (state, action) => {
      state.testsList.push(action.payload);
    });
  },
});

export const { refreshTestsList } = TestsListSlice.actions;
export default TestsListSlice.reducer;
