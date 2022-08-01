import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

import api from "../../api";
import { StyledForm, StyledInputArea } from "./style";
import { StyledDivVidro } from "../ContainerBooks/style";
import Button from "../Button";

const Form = () => {
  const history = useHistory();

  const regex = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;
  const formSchema = yup.object().shape({
    ISBN: yup
      .string()
      .required("Obrigatory field")
      .matches(regex, "Invalid ISBN"),
    book_name: yup.string().required("Obrigatory field"),
    author: yup.string().required("Obrigatory field"),
    npages: yup
      .number()
      .typeError("Must be a number")
      .required("Obrigatory field"),
    copies_available: yup
      .number()
      .required("Obrigatory field")
      .typeError("Must be a number"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/register", data)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
    history.push("/");
  };

  return (
    <>
      <StyledDivVidro height={"400px"} width={"230px"}>
        <h3>New Book</h3>
        <StyledForm className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <StyledInputArea>
            <input placeholder="ISBN" {...register("ISBN")} />
            {errors.ISBN && <p>{errors.ISBN.message}</p>}
          </StyledInputArea>
          <StyledInputArea>
            <input placeholder="Nome" {...register("book_name")} />
            {errors.book_name && <p>{errors.book_name.message}</p>}
          </StyledInputArea>
          <StyledInputArea>
            <input placeholder="Author" {...register("author")} />
            {errors.author && <p>{errors.author.message}</p>}
          </StyledInputArea>
          <StyledInputArea>
            <input placeholder="Number of pages" {...register("npages")} />
            {errors.npages && <p>{errors.npages.message}</p>}
          </StyledInputArea>
          <StyledInputArea>
            <input
              placeholder="Copies available"
              {...register("copies_available")}
            />
            {errors.copies_available && (
              <p>{errors.copies_available.message}</p>
            )}
          </StyledInputArea>
          <Button type="submit">Register</Button>
        </StyledForm>
      </StyledDivVidro>
    </>
  );
};

export default Form;
