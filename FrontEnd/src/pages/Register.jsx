import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import Form from "../components/Forms";

const Register = () => {
  const history = useHistory();
  return (
    <>
      <Button onClick={() => history.push("/")}>Home</Button>
      <Form />
    </>
  );
};

export default Register;
