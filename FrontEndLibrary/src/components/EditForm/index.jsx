import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { StyledEditForm, StyledDiv } from "./style";
import api from "../../api";
import Button from "../Button";
import { useHistory } from "react-router-dom";

const EditForm = ({
  setOpenEditForm,
  isbn,
  name,
  author,
  npages,
  copies_available,
}) => {
  const formSchema = yup.object().shape({
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
  const history = useHistory();
  const onSubmitFunction = (data) => {
    api
      .put(`/edit/${isbn}`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    setOpenEditForm(false);
    history.push("/");
  };

  return (
    <StyledDiv>
      <StyledEditForm
        className="form"
        onSubmit={handleSubmit(onSubmitFunction)}
      >
        <input
          placeholder="Nome"
          defaultValue={name}
          {...register("book_name")}
        />
        {errors.book_name?.message}
        <input
          placeholder="Author"
          defaultValue={author}
          {...register("author")}
        />
        {errors.author?.message}
        <input
          placeholder="Number of pages"
          defaultValue={npages}
          {...register("npages")}
        />
        {errors.npages?.message}
        <input
          placeholder="Copies available"
          defaultValue={copies_available}
          {...register("copies_available")}
        />
        {errors.copies_available?.message}
        <div>
          <Button
            onClick={() => {
              setOpenEditForm(false);
            }}
          >
            Cancel
          </Button>
          <Button type="submit">Edit</Button>
        </div>
      </StyledEditForm>
    </StyledDiv>
  );
};

export default EditForm;
