import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../api";
import Button from "../components/Button";
import ContainerBooks from "../components/ContainerBooks";

const Books = () => {
  const history = useHistory();
  const [listBooks, setListBooks] = useState([]);

  useEffect(() => {
    api.get("/books").then((response) => {
      setListBooks(response.data);
    });
  }, []);

  return (
    <>
      <Button onClick={() => history.push("/")}>Home</Button>
      <ContainerBooks listBooks={listBooks} setListBooks={setListBooks} />
    </>
  );
};

export default Books;
