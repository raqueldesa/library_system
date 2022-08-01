import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

import api from "../../api";
import { StyledForm } from "./style";

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
    console.log(data);
    history.push("/");
  };

  return (
    <div className="container">
      <h3>Formulário</h3>
      <StyledForm className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="ISBN" {...register("ISBN")} />
        {errors.ISBN?.message}
        <input placeholder="Nome" {...register("book_name")} />
        {errors.book_name?.message}
        <input placeholder="Author" {...register("author")} />
        {errors.author?.message}
        <input placeholder="Number of pages" {...register("npages")} />
        {errors.npages?.message}
        <input
          placeholder="Copies available"
          {...register("copies_available")}
        />
        {errors.copies_available?.message}
        <button type="submit">Register</button>
      </StyledForm>
    </div>
  );
};

export default Form;
