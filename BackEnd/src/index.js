import express from "express";
import { deleteBook, registerBook, selectBooks, updateBook } from "./database";

const app = express();
const port = 3001;

// app.get("/", (req, res) => {
//   let SQL =
//     "INSERT INTO books(ISBN, book_name, author, npages, copies_available) VALUES ('1-4028-9462-', 'crhonos2', 'sextsnt2e', '3002', '223') ";

//   database.query(SQL, (err, res) => {
//     console.log(err);
//   });
// });
async function seeBooks() {
  const books = await selectBooks();
  console.log(books);
  return books;
}

async function registerNewBook() {
  const newBook = {
    ISBN: "1-4021-9464-1",
    book_name: "Chronos",
    author: "Dark1",
    npages: 230,
    copies_available: 24,
  };
  const result = await registerBook(newBook);
  console.log(result);
  return result;
}

async function changeBook() {
  const newBook = {
    ISBN: "1-4028-9464-6",
    book_name: "Chronos",
    author: "Sextante",
    npages: 230,
    copies_available: 24,
  };
  const result = await updateBook(newBook);
  console.log(result);
  return result;
}

async function removeBook() {
  const bookISBN = "1-4028-9462-1";
  const result = await deleteBook(bookISBN);
  console.log(result);
  return result;
}

//Estrutura do CRUD
//registerNewBook();
seeBooks();
changeBook();
removeBook();

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
