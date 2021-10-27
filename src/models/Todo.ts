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

const TodoPriorityNames = new Map<TodoPriority, string>();
TodoPriorityNames.set(TodoPriority.HIGH, "Importante");
TodoPriorityNames.set(TodoPriority.NORMAL, "Normale");
TodoPriorityNames.set(TodoPriority.LOW, "Faible");

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

export { TodoPriority, TodoPriorities, TodoPriorityNames, TodoState };
export default Todo;
