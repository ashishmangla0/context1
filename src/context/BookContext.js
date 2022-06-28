import { createContext, useState } from "react";
import { v1 as uuidv1 } from "uuid";

const BookContext = createContext();

const BookContextProvider = (props) => {
  const BooksInitialState = [
    { title: "name of the wind", author: "patrick", id: 1 },
    { title: "the final Empire", author: "brandon danderson", id: 2 },
  ];
  const [books, SetBooks] = useState(BooksInitialState);
  const addBook = (title, author) => {
    SetBooks([...books, { title, author, id: uuidv1() }]);
  };
  const removeBook = (id) => {
    SetBooks(books.filter((book) => book.id !== id));
  };

  const BookContextValues = {
    books,
    addBook,
    removeBook,
  };

  const { children } = props;
  return (
    <BookContext.Provider value={BookContextValues}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookContextProvider };
