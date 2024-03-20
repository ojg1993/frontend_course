import "./TodoItem.css";

const TodoItem = () => {
  return (
    <div className="TodoItem">
      <input type="checkbox" />
      <div className="content">todo...</div>
      <div className="date">Date</div>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
