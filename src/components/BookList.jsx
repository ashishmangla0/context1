import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetail from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <ul>
      {books.map((book) => (
        <BookDetail book={book} key={book.id} />
      ))}
    </ul>
  ) : (
    <div>No data</div>
  );
};
export default BookList;
