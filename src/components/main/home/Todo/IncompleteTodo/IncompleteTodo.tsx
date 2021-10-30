import { FC, MouseEvent } from "react";
import Todo from "../../../../../models/Todo";
import { useCompleteTodo, useDeleteTodo } from "../../../../../redux/slices";
import TodoContent from "../TodoContent/TodoContent";
import {
  CancelButton,
  ColumnDiv,
  DoneButton,
  TodoContainer,
} from "./IncompleteTodo.style";

const IncompleteTodo: FC<{ todo: Todo }> = ({ todo }) => {
  const [, completeTodo] = useCompleteTodo();
  const [, deleteTodo] = useDeleteTodo();

  const handleDoneClick = (event: MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset["todoId"];
    if (id === undefined) {
      console.log("The todo id to mark as complete is undefined");
      return;
    }
    completeTodo(+id);
  };

  const handleCancelClick = (event: MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset["todoId"];
    if (id === undefined) {
      console.log("The todo id to delete is undefined");
      return;
    }
    deleteTodo(+id);
  };

  return (
    <TodoContainer data-testid="TodoContainer">
      <TodoContent todo={todo} />
      <ColumnDiv>
        <DoneButton
          data-testid="DoneButton"
          data-todo-id={todo.id}
          onClick={handleDoneClick}>
          Terminer
        </DoneButton>
        <CancelButton
          data-testid="CancelButton"
          data-todo-id={todo.id}
          onClick={handleCancelClick}>
          Annuler
        </CancelButton>
      </ColumnDiv>
    </TodoContainer>
  );
};

export default IncompleteTodo;
