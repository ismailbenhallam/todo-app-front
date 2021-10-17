import styled from "styled-components";
import NewTodoContainer from "./NewTodoContainer";
import { TodoPriority, TodoProps, TodoState } from "./Todo";
import TodoList from "./TodoList";

const Container = styled.div``;

const TODOS: Array<TodoProps> = [
  {
    id: 1,
    priority: TodoPriority.HIGH,
    title: "ETDDev, je veux initialiser le projet à l'aide de create-react-app",
    state: TodoState.WAITING,
    description:
      "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
  },
  {
    id: 2,
    priority: TodoPriority.NORMAL,
    title: "ETDDev, je veux initialiser le projet à l'aide de create-react-app",
    state: TodoState.WAITING,
    description:
      "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
  },
  {
    id: 3,
    priority: TodoPriority.LOW,
    title: "ETDDev, je veux initialiser le projet à l'aide de create-react-app",
    state: TodoState.WAITING,
    description:
      "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
  },
];

const Home = () => {
  return (
    <Container>
      <NewTodoContainer />
      <TodoList todos={TODOS} />
    </Container>
  );
};

export default Home;
