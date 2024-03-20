import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeydown}
        onChange={onChangeContent}
        placeholder="New Todo..."
      />
      <button onClick={onSubmit}>Add</button>
    </div>
  );
};

export default Editor;
