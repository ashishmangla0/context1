import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const initalValue = {
    title: "",
    author: "",
  };

  const [formData, setFormData] = useState(initalValue);

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;

  //     console.log(value);
  //     setFormData({ ...formData, [name]: value });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
    // let aa = Object.values(formData);
    // console.log(aa);
    //addBook(Object.values(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type={"text"}
          onChange={(e) => setTitle(e.target.value)}
          name={"title"}
          required
        />
      </div>
      <div>
        <label>Author</label>
        <input
          type={"text"}
          onChange={(e) => setAuthor(e.target.value)}
          name={"author"}
          required
        />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
