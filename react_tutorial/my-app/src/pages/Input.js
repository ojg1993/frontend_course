import React, { useState } from "react";

const Input = () => {
  const [txtVal, setTxtVal] = useState("");
  const onChange = (e) => {
    setTxtVal(e.target.value);
  };

  return (
    <div>
      <input type="text" value={txtVal} onChange={onChange} />
      <br />
      <p>{txtVal}</p>
    </div>
  );
};


export default Input;
