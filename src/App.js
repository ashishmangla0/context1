import logo from "./logo.svg";
import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider";
import { BookContext } from "./context/BookContext";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

function App() {
  const { themeDark, handleThemeDark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);

  return (
    <div className="App">
      <button onClick={handleThemeDark}>Swit theme</button>
      {themeDark ? "aaaaaa" : "bbbbbb"}
      <br />
      book length {books.length}
      <BookList />
      <BookForm/>
    </div>
  );
}

export default App;
