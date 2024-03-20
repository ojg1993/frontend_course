import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

import { useState, useRef } from "react";

const temp = [
  {
    id: 0,
    isDone: false,
    content: "React tutorial",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Django tutorial",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "Network tutorial",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(temp);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List onUpdate={onUpdate} onDelete={onDelete} todos={todos} />
    </div>
  );
}

export default App;
