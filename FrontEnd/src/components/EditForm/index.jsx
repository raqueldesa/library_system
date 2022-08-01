import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { StyledDiv } from "./style";
import api from "../../api";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import { StyledDivVidro } from "../ContainerBooks/style";
import { StyledForm, StyledInputArea } from "../Forms/style";

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
      <StyledDivVidro height={"400px"} width={"230px"}>
        <h3>Update the book</h3>
        <StyledForm className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <StyledInputArea>
            <input
              placeholder="Nome"
              defaultValue={name}
              {...register("book_name")}
            />
            {errors.book_name && <p>{errors.book_name.message}</p>}
          </StyledInputArea>
          <StyledInputArea>
            <input
              placeholder="Author"
              defaultValue={author}
              {...register("author")}
            />
            {errors.author && <p>{errors.author.message}</p>}
          </StyledInputArea>
          <StyledInputArea>
            <input
              placeholder="Number of pages"
              defaultValue={npages}
              {...register("npages")}
            />
            {errors.npages && <p>{errors.npages.message}</p>}
          </StyledInputArea>
          <StyledInputArea>
            <input
              placeholder="Copies available"
              defaultValue={copies_available}
              {...register("copies_available")}
            />
            {errors.copies_available && (
              <p>{errors.copies_available.message}</p>
            )}
          </StyledInputArea>
          <div className="buttons">
            <Button
              width="85px"
              onClick={() => {
                setOpenEditForm(false);
              }}
            >
              Cancel
            </Button>
            <Button width="85px" type="submit">
              Edit
            </Button>
          </div>
        </StyledForm>
      </StyledDivVidro>
    </StyledDiv>
  );
};

export default EditForm;
