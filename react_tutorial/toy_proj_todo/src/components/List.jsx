import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos }) => {
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

  return (
    <div className="List">
      <h4>Todo List 💡</h4>
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
