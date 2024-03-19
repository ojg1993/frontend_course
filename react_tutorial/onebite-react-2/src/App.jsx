import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [cnt, setCnt] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // Life Cycle: Mount -> Update -> Unmount

  // 1. Mount: creattion
  useEffect(() => {
    console.log("mount"); // callback func is called on mount
  }, []);

  // 2. Update: change, re-rendering
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update"); // callback func is called on evert update
  });

  // 3. Unmount -> Even.jsx

  const onClickBnt = (value) => {
    setCnt(cnt + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section className="viewer">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section className="viewer">
        <Viewer cnt={cnt} />
        {cnt % 2 === 0 ? <Even /> : null}
      </section>
      <section className="controller">
        <Controller onClickBnt={onClickBnt} />
      </section>
    </div>
  );
}

export default App;
