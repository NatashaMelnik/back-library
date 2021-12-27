// import PropTypes from "prop-types";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookFragment from "../books/book_fragment";
import { getProfile } from "./profileAPI";
import { loadingProfile } from "./profileSlice";

const Profile: FC<any> = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);

  useEffect(() => {
    getProfile("n.melnik1788@gmail.com")
      .then((res) => res.json())
      .then((res) => dispatch(loadingProfile(res)));
  }, [dispatch]);

  function toggleRead(id: string) {
    const element = document.getElementById(id);
    if (element?.style.display === "none") {
      element!.style.display = "flex";
    } else {
      element!.style.display = "none";
    }
  }

  return (
    <div>
      <div className="profile-header">
        <h2>My Profile</h2>
      </div>
      <div className="prifile-body">
        <div>
          <img className="profile-image" src={profile.img} alt="" />
        </div>
        <div className="profile-text">
          <p>{profile.name}</p>
          <p>{profile.email}</p>
        </div>
      </div>
      <div>
        <div className="togle-block" onClick={() => toggleRead("readed-block")}>
          readed:
        </div>
        <div className="all-books-container" id="readed-block">
          {profile?.readed?.length ? (
            profile?.readed?.map((book: any, key = "index") => (
              <div key={book.id}>{BookFragment(book)}</div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>
        <div className="togle-block" onClick={() => toggleRead("liked-block")}>
          liked:
        </div>
        <div className="all-books-container" id="liked-block">
          {profile?.liked?.length ? (
            profile?.liked?.map((book: any, key = "index") => (
              <div key={book.id}>{BookFragment(book)}</div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>
        <div
          className="togle-block"
          onClick={() => toggleRead("recomended-block")}
        >
          recomended:
        </div>
        <div className="all-books-container" id="recomended-block">
          {profile?.recomended?.length ? (
            profile?.recomended?.map((book: any, key = "index") => (
              <div key={book.id}>{BookFragment(book)}</div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
