import { createSlice } from "@reduxjs/toolkit";

interface Book {
  title: string;
  author: string;
  type: string;
  description: string;
  pages: string;
  rating: string;
  link: string;
  image: string;
}

interface Books {
  books: Array<Book>;
}

const initialState: Books = {
  books: [],
};

export const allBooksSlice = createSlice({
  name: "all_books",
  initialState,
  reducers: {
    loadingAllBooks: (state, action: any) => {
      return action.payload;
    },
  },
  extraReducers: {},
});

export const { loadingAllBooks } = allBooksSlice.actions;

export default allBooksSlice.reducer;
