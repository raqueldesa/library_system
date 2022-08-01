import { useHistory } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  const history = useHistory();
  return (
    <>
      <h1>Welcome to your Library</h1>
      <div className="buttons">
        <Button onClick={() => history.push("/register")}>
          Register a New Book
        </Button>
        <Button onClick={() => history.push("/books")}>
          See all the Books
        </Button>
      </div>
    </>
  );
};

export default Home;
