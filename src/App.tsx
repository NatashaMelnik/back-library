import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "./App.css";
import { LayoutComponent } from "./features/layout/layout";
import Login from "./features/login/login";
import SignUp from "./features/signup/signup";
import Profile from "./features/profile/profile";
import Book from "./features/book/book";
import Books from "./features/books/books";
import AllBooks from "./features/books/all_books";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact>
            <LayoutComponent title="main page">
              <Redirect to="/all-books" />
            </LayoutComponent>
          </Route>
          <Route path="/login" exact>
            <LayoutComponent title="Login">
              <Login />
            </LayoutComponent>
          </Route>
          <Route path="/main" exact>
            <Redirect to="/all-books" />
          </Route>
          <Route path="/profile" exact>
            <LayoutComponent title="profile">
              <Profile />
            </LayoutComponent>
          </Route>
          <Route path="/signup" exact>
            <LayoutComponent title="Registration">
              <SignUp />
            </LayoutComponent>
          </Route>
          <Route path="/book/:id" exact>
            <LayoutComponent title="Book!">
              <Book />
            </LayoutComponent>
          </Route>
          <Route path="/all-books" exact>
            <LayoutComponent title="Books!">
              <AllBooks />
            </LayoutComponent>
          </Route>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
