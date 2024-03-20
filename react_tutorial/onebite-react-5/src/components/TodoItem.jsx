import "./TodoItem.css";
import { useContext, memo } from "react";
import { TodoContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoContext);
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDelBtn = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckBox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelBtn}>Delete</button>
    </div>
  );
};

export default memo(TodoItem);
