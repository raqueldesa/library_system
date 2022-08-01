import Book from "../Book";
import { StyledContainerBooks } from "./style";

const ContainerBooks = ({ listBooks, setListBooks }) => {
  return (
    <StyledContainerBooks>
      {typeof listBooks !== "undefined" ? (
        listBooks.map((book) => (
          <Book
            key={book.isbn}
            isbn={book.isbn}
            name={book.book_name}
            author={book.author}
            npages={book.npages}
            copies_available={book.copies_available}
            listBooks={listBooks}
            setListBooks={setListBooks}
          />
        ))
      ) : (
        <h1>nada</h1>
      )}
    </StyledContainerBooks>
  );
};

export default ContainerBooks;
