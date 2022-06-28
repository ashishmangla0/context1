import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookDetail = ({ book }) => {
  const { title, author, id } = book;
  const { removeBook } = useContext(BookContext);
  return (
    <li onClick={() => removeBook(id)}>
      id: {id}
      <div className="title">title: {title}</div>
      <div className="author">author: {author}</div>
    </li>
  );
};

export default BookDetail;
