import { createSlice } from "@reduxjs/toolkit";

interface Book {
  id: number;
  title: string;
  author: string;
  type: string;
  description: string;
  pages: string;
  rating: string;
  link: string;
  image: string;
}

const initialState: Book = {
  id: 0,
  title: "",
  author: "",
  type: "",
  description: "",
  pages: "",
  rating: "",
  link: "",
  image: "",
};

export const bookSlice = createSlice({
  name: "one-book",
  initialState,
  reducers: {
    loadingBook: (state, action: any) => {
      return action.payload;
    },
  },
  extraReducers: {},
});

export const { loadingBook } = bookSlice.actions;

export default bookSlice.reducer;
