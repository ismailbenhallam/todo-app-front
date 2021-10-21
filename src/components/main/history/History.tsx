import { FC, MouseEvent, useState } from "react";
import { TodoState } from "../../../models/Todo";
import CompleteTodo from "../home/Todo/CompleteTodo";
import TodoList from "../home/TodoList";
import { HistoryContainer, Tab, Tabs } from "./History.style";

interface TabsType {
  [key: string]: {
    name: string;
    filterFunctionState: TodoState;
  };
}

const TABS: TabsType = {
  done: {
    name: "Terminées",
    filterFunctionState: TodoState.DONE,
  },
  deleted: {
    name: "Supprimées",
    filterFunctionState: TodoState.DELETED,
  },
};

const History: FC = () => {
  const [activeButton, setActiveButton] = useState("done");

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event);
    console.log(event.target);
    setActiveButton(event.currentTarget.name);
  };

  return (
    <HistoryContainer>
      <Tabs>
        {Object.entries(TABS).map((entry) => (
          <Tab
            key={entry[0]}
            onClick={handleClick}
            name={entry[0]}
            className={activeButton === entry[0] ? "active" : ""}>
            {entry[1].name}
          </Tab>
        ))}
      </Tabs>
      {/* as={TodoListContainer} */}
      <TodoList
        todoComponent={CompleteTodo}
        filterFunction={(todo) =>
          todo.state === TABS[activeButton].filterFunctionState
        }
      />
    </HistoryContainer>
  );
};

export default History;
