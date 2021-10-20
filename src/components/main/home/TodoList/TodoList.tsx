import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/reducers";
import Todo from "../Todo/Todo";
import { TodoListContainer } from "./TodoList.style";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos);
  // const [todos, setTodos] = useState<TodoModel[]>([]);

  // store.subscribe(() => {
  //   setTodos(store.getState().todos);
  // });

  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
