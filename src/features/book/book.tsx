// import PropTypes from "prop-types";
import { FC, useEffect } from "react";
import BookIcon from "@material-ui/icons/Book";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExposurePlus1Icon from "@material-ui/icons/ExposurePlus1";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadingBook } from "./bookSlice";
import { getBook } from "./bookAPI";
import { setReaded } from "./bookAPI";
import { setLiked } from "./bookAPI";
import { setRecomended } from "./bookAPI";

const Book: FC<any> = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();
  const oneBook = useSelector((state: any) => state.book);
  const profile = useSelector((state: any) => state.profile);

  useEffect(() => {
    getBook(+id)
      .then((res) => res.json())
      .then((res) => dispatch(loadingBook(res)));
  }, [dispatch, id]);

  function addToReaded() {
    setReaded(+profile.id | 1, oneBook.id);
  }

  function addToLiked() {
    setLiked(+profile.id | 1, oneBook.id);
  }

  function addToRecomended() {
    setRecomended(+profile.id | 1, oneBook.id);
  }

  return (
    <div>
      {oneBook ? (
        <>
          <div>
            <h2>{oneBook.title}</h2>
          </div>
          <div className="book-body">
            <div>
              <img className="single-book-img" src={oneBook.image} alt="book" />
              <div className="addFetchButtons">
                <BookIcon onClick={() => addToReaded()} />
                <FavoriteIcon onClick={() => addToLiked()} />
                <ExposurePlus1Icon onClick={() => addToRecomended()} />
              </div>
            </div>
            <div className="book-description">
              <div>
                <b>Author:</b> {oneBook.author}
              </div>
              <div>
                <b>Genre:</b> {oneBook.type}
              </div>
              <div>
                <b>Stars:</b> {oneBook.rating}
              </div>
              <div>
                <b>{oneBook.pages}</b> pages.
              </div>
              <hr />
              <div>
                <a target="_blank" href={oneBook.link}>
                  Read
                </a>
              </div>
              <hr />
            </div>
          </div>
          <div>
            <h3>Plot:</h3>
            <br />
            <div className="plot">{oneBook.description}</div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Book;
