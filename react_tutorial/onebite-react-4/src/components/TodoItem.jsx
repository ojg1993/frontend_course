import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
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

export default memo(TodoItem, (prevProps, nextProbs) => {
  if (prevProps.id !== nextProbs.id) return false;
  if (prevProps.isDone !== nextProbs.isDone) return false;
  if (prevProps.content !== nextProbs.content) return false;
  if (prevProps.date !== nextProbs.date) return false;

  return true;
});
