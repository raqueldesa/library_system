import express from "express";
import cors from "cors";
import { deleteBook, registerBook, selectBooks, updateBook } from "./database";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

async function seeBooks(res) {
  const books = await selectBooks();
  res.send(books);
  return books;
}

async function registerNewBook(newBook) {
  // const newBook = {
  //   ISBN: "1-4021-9464-1",
  //   book_name: "Chronos",
  //   author: "Dark1",
  //   npages: 230,
  //   copies_available: 24,
  // };
  const result = await registerBook(newBook);

  return result;
}

async function changeBook(newBook, isbn) {
  // const newBook = {
  //   ISBN: "1-4028-9464-6",
  //   book_name: "Chronos",
  //   author: "Sextante",
  //   npages: 230,
  //   copies_available: 24,
  // };
  console.log(isbn + " change");
  const result = await updateBook(newBook, isbn);
  console.log(result);
  return result;
}

async function removeBook(bookISBN) {
  // const bookISBN = "1-4028-9462-1";
  const result = await deleteBook(bookISBN);
  console.log(result);
  return result;
}

//Estrutura do CRUD

// registerNewBook();
// seeBooks();
// changeBook();
// removeBook();

app.post("/register", (req, res) => {
  const newBook = req.body;
  registerNewBook(newBook);
  console.log(req.body);
});

app.get("/books", (req, res) => {
  seeBooks(res);
});

app.put("/edit/:isbn", (req, res) => {
  const editedBook = req.body;
  const { isbn } = req.params;
  console.log(isbn + " put");
  changeBook(editedBook, isbn);
});

app.delete("/delete/:isbn", (req, res) => {
  const { isbn } = req.params;
  removeBook(isbn);
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
