import { useState } from "react";

const Counter = () => {
  const [cnt, setCnt] = useState(0);

  return (
    <div>
      <h1>{cnt}</h1>
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCnt(cnt - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCnt(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
