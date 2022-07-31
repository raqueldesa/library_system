import mysql from "mysql2/promise";

export async function connect() {
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  const connection = await mysql.createConnection(
    "mysql://root:password@localhost:3306/library_system"
  );

  console.log("Connected to mysql");

  global.connection = connection;
  return connection;
}
connect();

export async function selectBooks() {
  const conn = await connect();
  const [rows] = await conn.query("SELECT * FROM books;");
  return rows;
}

export async function registerBook({
  ISBN,
  book_name,
  author,
  npages,
  copies_available,
}) {
  const conn = await connect();
  const SQL =
    "INSERT INTO books(ISBN, book_name, author, npages, copies_available) VALUES (?,?,?,?,?);";
  const bookInfo = [ISBN, book_name, author, npages, copies_available];

  return await conn.query(SQL, bookInfo);
}

export async function updateBook({
  ISBN,
  book_name,
  author,
  npages,
  copies_available,
}) {
  const conn = await connect();
  const SQL =
    "UPDATE books SET book_name = ?, author= ?, npages= ?, copies_available= ? WHERE ISBN = ?;";
  const bookInfo = [book_name, author, npages, copies_available, ISBN];

  return await conn.query(SQL, bookInfo);
}

export async function deleteBook(ISBN) {
  const conn = await connect();
  const SQL = "DELETE FROM books WHERE ISBN = ?;";

  return await conn.query(SQL, [ISBN]);
}
