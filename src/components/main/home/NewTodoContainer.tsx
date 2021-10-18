import { SyntheticEvent, useState } from "react";
import Todo, {
  TodoPriorities,
  TodoPriority,
  TodoPriorityNames,
} from "../../../models/Todo";
import TodoService from "../../../services/TodoService";
import {
  AddButton,
  ButtonsContainer,
  Container,
  ErrorDiv,
  InputText,
  PrioritySelect,
  TextArea,
} from "./NewTodoContainer.style";

const NewTodoContainer = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    priority: TodoPriority.HIGH,
  });
  const [error, setError] = useState("");
  const todoService = new TodoService();

  const handleChange = (event: SyntheticEvent) => {
    setError("");
    setInputs((state) => {
      return {
        ...state,
        [(event.target as HTMLInputElement).name]: (
          event.target as HTMLInputElement
        ).value,
      };
    });
  };

  const handleSubmit = (event: SyntheticEvent) => {
    let { title, description, priority } = inputs;
    if (!title) {
      setError("Can u please write a short title ?");
      return;
    }
    setError("");
    setInputs((state) => {
      return { title: "", description: "", priority: state.priority };
    });
    todoService.saveTodo(new Todo(-1, title, description, +priority));
  };

  return (
    <Container>
      <InputText
        name="title"
        placeholder="Titre"
        value={inputs.title}
        onChange={handleChange}
      />
      <TextArea
        name="description"
        placeholder="Description"
        as="textarea"
        value={inputs.description}
        onChange={handleChange}
      />
      <ErrorDiv visibility={!!error}>{error}</ErrorDiv>
      <ButtonsContainer>
        <PrioritySelect name="priority" as="select" onChange={handleChange}>
          {TodoPriorities.map((p) => (
            <option key={p} value={p}>
              {TodoPriorityNames.get(p)}
            </option>
          ))}
        </PrioritySelect>
        <AddButton as="button" onClick={handleSubmit}>
          Ajouter
        </AddButton>
      </ButtonsContainer>
    </Container>
  );
};

export default NewTodoContainer;
