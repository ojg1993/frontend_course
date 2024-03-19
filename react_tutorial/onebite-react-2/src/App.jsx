import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect } from "react";

function App() {
  const [cnt, setCnt] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(`cnt: ${cnt} / input: ${input}`);
  }, [cnt, input]); // dependency array

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
      </section>
      <section className="controller">
        <Controller onClickBnt={onClickBnt} />
      </section>
    </div>
  );
}

export default App;
