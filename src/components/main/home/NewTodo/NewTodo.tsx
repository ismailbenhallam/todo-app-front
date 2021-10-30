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
  const [{ loading }, createTodo] = useCreateTodo();
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
      description: data.description?.trim(),
      priority: +data.priority,
      state: TodoState.WAITING,
    });
  };

  return (
    <Container data-testid="form" onSubmit={handleSubmit(onSubmit)}>
      <InputText
        loading={loading}
        data-testid="title"
        placeholder="Titre"
        {...register("title", {
          required: true,
          disabled: loading,
          validate: (value) => value.trim().length > 0,
        })}
      />
      <TextArea
        loading={loading}
        data-testid="description"
        {...(register("description"), { disabled: loading })}
        placeholder="Description"
        as="textarea"
      />
      <ErrorDiv data-testid="error" visibility={errors.title}>
        Veuillez saisir un titre SVP
      </ErrorDiv>
      <ButtonsContainer>
        <PrioritySelect
          as="select"
          loading={loading}
          {...register("priority", { disabled: loading })}>
          {TodoPriorities.map((p) => (
            <option key={p} value={p}>
              {TodoPriorityNames.get(p)}
            </option>
          ))}
        </PrioritySelect>
        <AddButton
          loading={loading}
          disabled={loading}
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
