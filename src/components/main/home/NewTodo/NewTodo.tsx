import { FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Todo, {
  TodoPriorities,
  TodoPriorityNames,
} from "../../../../models/Todo";
import { createTodo } from "../../../../redux/slices";
import {
  AddButton,
  ButtonsContainer,
  Container,
  ErrorDiv,
  InputText,
  PrioritySelect,
  TextArea,
} from "./NewTodo.style";

const NewTodo: FC = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    dispatch(
      createTodo(new Todo(-1, data.title, data.description, +data.priority))
    );
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <InputText
        placeholder="Titre"
        {...register("title", { required: true })}
      />
      <TextArea
        {...register("description")}
        placeholder="Description"
        as="textarea"
      />
      <ErrorDiv visibility={errors.title}>
        "Veuillez saisir un titre SVP"
      </ErrorDiv>
      <ButtonsContainer>
        <PrioritySelect as="select" {...register("priority")}>
          {TodoPriorities.map((p) => (
            <option key={p} value={p}>
              {TodoPriorityNames.get(p)}
            </option>
          ))}
        </PrioritySelect>
        <AddButton as="input" type="submit" value="Ajouter" />
      </ButtonsContainer>
    </Container>
  );
};

export default NewTodo;
