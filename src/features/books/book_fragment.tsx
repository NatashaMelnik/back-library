// import PropTypes from "prop-types";
import { FC } from "react";
import { Link } from "react-router-dom";

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

const BookFragment: FC<any> = (params: Book) => {
  const book: Book = params;

  return (
    <div className="book-element">
      <div className="book-element-title">{book.title}</div>
      <div>
        <Link to={`/book/${book.id}`} className="active">
          <img
            className="book-element-image"
            src={book.image}
            alt={book.type}
          />
        </Link>
      </div>
    </div>
  );
};

export default BookFragment;
