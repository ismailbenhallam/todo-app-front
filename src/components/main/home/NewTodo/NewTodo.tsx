import { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import Todo, {
  TodoPriorities,
  TodoPriority,
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
    dispatch(createTodo(new Todo(-1, title, description, +priority)));
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
      <ErrorDiv visibility={error}>{error}</ErrorDiv>
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

export default NewTodo;
