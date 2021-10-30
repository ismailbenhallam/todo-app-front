import { FC } from "react";
import { useForm } from "react-hook-form";
import {
  TodoPriorities,
  TodoPriorityNames,
  TodoState,
} from "../../../../models/Todo";
import { useCreateTodo } from "../../../../redux/slices";
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
  const [, createTodo] = useCreateTodo();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    reset();
    createTodo({
      id: -1,
      title: data.title.trim(),
      description: data.description.trim(),
      priority: +data.priority,
      state: TodoState.WAITING,
    });
  };

  return (
    <Container data-testid="form" onSubmit={handleSubmit(onSubmit)}>
      <InputText
        data-testid="title"
        placeholder="Titre"
        {...register("title", {
          required: true,
          validate: (value) => value.trim().length > 0,
        })}
      />
      <TextArea
        data-testid="description"
        {...register("description")}
        placeholder="Description"
        as="textarea"
      />
      <ErrorDiv data-testid="error" visibility={errors.title}>
        Veuillez saisir un titre SVP
      </ErrorDiv>
      <ButtonsContainer>
        <PrioritySelect as="select" {...register("priority")}>
          {TodoPriorities.map((p) => (
            <option key={p} value={p}>
              {TodoPriorityNames.get(p)}
            </option>
          ))}
        </PrioritySelect>
        <AddButton
          data-testid="button"
          as="input"
          type="submit"
          value="Ajouter"
        />
      </ButtonsContainer>
    </Container>
  );
};

export default NewTodo;
