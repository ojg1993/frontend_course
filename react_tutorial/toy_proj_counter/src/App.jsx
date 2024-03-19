import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

function App() {
  const [cnt, setCnt] = useState(0);

  const onClickBnt = (value) => {
    setCnt(cnt + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
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
