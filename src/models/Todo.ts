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
TodoPriorityNames.set(TodoPriority.HIGH, "Important");
TodoPriorityNames.set(TodoPriority.NORMAL, "Normal");
TodoPriorityNames.set(TodoPriority.LOW, "Faible");

enum TodoState {
  WAITING,
  DONE,
  DELETED,
}

class Todo {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public priority: TodoPriority = TodoPriority.NORMAL,
    public state: TodoState = TodoState.WAITING
  ) {}
}

export { TodoPriority, TodoPriorities, TodoPriorityNames, TodoState, Todo };
export default Todo;
