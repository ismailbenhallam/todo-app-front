enum TodoPriority {
  HIGH,
  NORMAL,
  LOW,
}

const TodoPriorities = [
  TodoPriority.HIGH,
  TodoPriority.NORMAL,
  TodoPriority.LOW,
];

const TodoPriorityNameKeys = new Map<TodoPriority, string>();
TodoPriorityNameKeys.set(TodoPriority.HIGH, "todo.priorities.high");
TodoPriorityNameKeys.set(TodoPriority.NORMAL, "todo.priorities.normal");
TodoPriorityNameKeys.set(TodoPriority.LOW, "todo.priorities.low");

enum TodoState {
  WAITING,
  DONE,
  DELETED,
}

interface Todo {
  id: number;
  title: string;
  description: string;
  priority: TodoPriority;
  state: TodoState;
  completionDate?: Date;
}

export { TodoPriority, TodoPriorities, TodoPriorityNameKeys, TodoState };
export default Todo;
