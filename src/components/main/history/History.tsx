import { TodoState } from "models/Todo";
import { FC, MouseEvent, useState } from "react";
import { FormattedMessage } from "react-intl";
import CompleteTodo from "../home/Todo/CompleteTodo";
import TodoList from "../home/TodoList";
import { HistoryContainer, Tab, Tabs } from "./History.style";

interface TabsType {
  [key: string]: {
    key: string;
    filterFunctionState: TodoState;
  };
}

const TABS: TabsType = {
  done: {
    key: "history.tabs.done",
    filterFunctionState: TodoState.DONE,
  },
  deleted: {
    key: "history.tabs.deleted",
    filterFunctionState: TodoState.DELETED,
  },
};

const History: FC = () => {
  const [activeButton, setActiveButton] = useState("done");

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
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
            <FormattedMessage id={entry[1].key} />
          </Tab>
        ))}
      </Tabs>
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
