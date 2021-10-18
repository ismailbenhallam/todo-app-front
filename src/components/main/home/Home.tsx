import styled from "styled-components";
import NewTodoContainer from "./NewTodoContainer";
import TodoList from "./TodoList";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <NewTodoContainer />
      <TodoList />
    </Container>
  );
};

export default Home;
