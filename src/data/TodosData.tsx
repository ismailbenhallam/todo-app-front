import Todo, { TodoPriority, TodoState } from "../models/Todo";

// For dev only
export const TodosData = [
  new Todo(
    0,
    "ETDDev, je veux initialiser le projet à l'aide de create-react-app",
    "text text text text text text text text text text text text text text text text text text text text text text text ",
    TodoPriority.HIGH,
    TodoState.DONE
  ),
  new Todo(
    1,
    "ETDDev, je veux initialiser le projet à l'aide de create-react-app",
    "text text text text text text text text text text text text text text text text text text text text text text text ",
    TodoPriority.NORMAL,
    TodoState.WAITING
  ),
  new Todo(
    2,
    "ETDDev, je veux initialiser le projet à l'aide de create-react-app",
    "text text text text text text text text text text text text text text text text text text text text text text text ",
    TodoPriority.LOW,
    TodoState.WAITING
  ),
];
