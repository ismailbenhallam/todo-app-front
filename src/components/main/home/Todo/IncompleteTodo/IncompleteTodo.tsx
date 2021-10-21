import { FC, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { TodoPriority, TodoState } from "../../../../../models/Todo";
import { completeTodo, deleteTodo } from "../../../../../redux/slices";
import TodoContent from "../TodoContent/TodoContent";
import {
  CancelButton,
  ColumnDiv,
  DoneButton,
  TodoContainer,
} from "./IncompleteTodo.style";

export interface TodoProps {
  id: number;
  title: string;
  description: string;
  priority: TodoPriority;
  state: TodoState;
}

const IncompleteTodo: FC<TodoProps> = (props) => {
  const dispatch = useDispatch();

  const handleDoneClick = (event: MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset["todoId"];
    if (id === undefined) {
      console.log("The todo id to mark as complete is undefined");
      return;
    }
    dispatch(completeTodo(+id));
  };

  const handleCancelClick = (event: MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset["todoId"];
    if (id === undefined) {
      console.log("The todo id to delete is undefined");
      return;
    }
    dispatch(deleteTodo(+id));
  };

  console.log("props.id", props.id);

  return (
    <TodoContainer data-id={props.id}>
      <TodoContent {...props} />
      <ColumnDiv>
        <DoneButton data-todo-id={props.id} onClick={handleDoneClick}>
          Terminer
        </DoneButton>
        <CancelButton data-todo-id={props.id} onClick={handleCancelClick}>
          Annuler
        </CancelButton>
      </ColumnDiv>
    </TodoContainer>
  );
};

export default IncompleteTodo;
