import Todo, { TodoPriority, TodoState } from "../models/Todo";

// For dev only
export const TodosDataz = [
  new Todo(
    0,
    "Une tache importante: términée",
    "text text text text text text text text text text text text text text text ",
    TodoPriority.HIGH,
    TodoState.DONE,
    new Date()
  ),
  new Todo(
    1,
    "Une tâche normale: en cours",
    "text text text text text text text text text text text text text text text text text text text text text text text ",
    TodoPriority.NORMAL,
    TodoState.WAITING
  ),
  new Todo(
    2,
    "Une tâche faible: en cours",
    "text text text text text text text text text text text text text text text text text text text text text text text ",
    TodoPriority.LOW,
    TodoState.WAITING
  ),
  new Todo(
    3,
    "Une tâche normale: supprimée",
    "text text text text text text text text text text text text text text text text text text text text text text text ",
    TodoPriority.NORMAL,
    TodoState.DELETED,
    new Date()
  ),
];
