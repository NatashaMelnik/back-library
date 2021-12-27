// import PropTypes from "prop-types";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "./booksAPI";
import { loadingAllBooks } from "./allbooksSlice";
import BookFragment from "./book_fragment";

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

const AllBooks: FC<any> = () => {
  const dispatch = useDispatch();
  const obj = useSelector((state: any) => state.books);

  useEffect(() => {
    getAllBooks()
      .then((res) => res.json())
      .then((res) => dispatch(loadingAllBooks(res)));
  }, [dispatch]);

  return (
    <div>
      <div className="decrription"></div>
      <div className="books_page-tile">
        <b>All books:</b>
      </div>
      <hr />
      <div className="all-books-container">
        {obj?.length ? (
          obj?.map((book: Book, key = "index") => (
            <div key={book.id}>{BookFragment(book)}</div>
          ))
        ) : (
          <></>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default AllBooks;
