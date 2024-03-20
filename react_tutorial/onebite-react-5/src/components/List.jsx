import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const List = () => {
  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    } else {
      return todos.filter((todo) =>
        todo.content.toLowerCase().includes(search.toLocaleLowerCase())
      );
    }
  };

  const filterdTodos = getFilteredData();

  const { totalCnt, doneCnt, notDoneCnt } = useMemo(() => {
    const totalCnt = todos.length;
    const doneCnt = todos.filter((todo) => todo.isDone).length;
    const notDoneCnt = totalCnt - doneCnt;

    return {
      totalCnt,
      doneCnt,
      notDoneCnt,
    };
  }, [todos]);

  // const { totalCnt, doneCnt, notDoneCnt } = getAnalyzedData();

  return (
    <div className="List">
      <h4>Todo List 💡</h4>
      <div>
        <div>Total: {totalCnt} </div>
        <div>Done: {doneCnt} </div>
        <div>Not Done: {notDoneCnt} </div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="Input search keywrod"
      />
      <div className="todos_wrapper">
        <div className="todos_wrapper">
          {filterdTodos.map((todo) => {
            return <TodoItem key={todo.id} {...todo} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
