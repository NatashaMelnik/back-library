import { createSlice } from '@reduxjs/toolkit';
import Question from './question.model';

const initialState: Question[] = [{ question: '', max_score: 2 }];

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addQuestion } = questionsSlice.actions;

export default questionsSlice.reducer;