// import PropTypes from "prop-types";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getBook } from "./booksAPI";
import { loadingBooks } from "./booksSlice";

const BookDetails: FC<any> = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();
  const book = useSelector((state: any) => state.book);

  useEffect(() => {
    if (id) {
      getBook(+id)
        .then((res) => res.json())
        .then((res) => dispatch(loadingBooks(res)));
    }
  }, [dispatch, id]);

  console.log(book);

  return (
    <div>
      <div className="books_page-tile">All books:</div>
      <div>{book.title}</div>
      <div>
        <img src={book.image} alt="book" />
      </div>
      <div className="book-description">{book.type}</div>
      <div>Genre: {book.type}</div>
      <div>{book.pages} pages.</div>
      <div>
        Plot: <br />
        {book.description}
      </div>
    </div>
  );
};

export default BookDetails;
