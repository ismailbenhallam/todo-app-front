import { ChangeEvent, SyntheticEvent, useState } from "react";
import Todo, {
  TodoPriorities,
  TodoPriority,
  TodoPriorityNames,
} from "../../../../models/Todo";
import TodoService from "../../../../services/TodoService";
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
  // service
  const todoService = new TodoService();

  // states
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    priority: TodoPriority.HIGH,
  });
  const [error, setError] = useState("");

  // listeners
  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setError("");
    setInputs((state) => {
      return {
        ...state,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event: SyntheticEvent) => {
    let { title, description, priority } = inputs;
    if (!title) {
      setError("Veuillez saisir un titre SVP");
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
