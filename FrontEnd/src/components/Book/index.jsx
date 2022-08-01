import { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../api";
import EditForm from "../EditForm";
import StyledBook from "./style";

const Book = ({
  isbn,
  name,
  author,
  npages,
  copies_available,
  listBooks,
  setListBooks,
}) => {
  const [openEditForm, setOpenEditForm] = useState(false);
  const history = useHistory("/");
  function handleClickBook() {
    setOpenEditForm(true);
  }
  function deleteBook() {
    console.log(isbn);
    api.delete(`/delete/${isbn}`);
    history.push("/");
  }

  return (
    <>
      <StyledBook>
        <h3>{name}</h3>
        <div className="info">
          <p>{author}</p>
          <p>Number of Pages: {npages}</p>
          <p>Copies available: {copies_available}</p>
        </div>
        <div>
          <button onClick={handleClickBook} className="edit">
            ed
          </button>
          <button onClick={deleteBook} className="remove">
            re
          </button>
        </div>
      </StyledBook>
      {openEditForm && (
        <EditForm
          setOpenEditForm={setOpenEditForm}
          isbn={isbn}
          name={name}
          author={author}
          npages={npages}
          copies_available={copies_available}
          listBooks={listBooks}
          setListBooks={setListBooks}
        />
      )}
    </>
  );
};

export default Book;
