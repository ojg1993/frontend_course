import React, { useState } from "react";

const Input2 = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: "",
  })

  const {name, email, tel} = inputs;

  const onChange = (e) => {
    const val = e.target.value;
    const id = e.target.id;
    setInputs({
        ...inputs,
        [id]: val
    })
  }
  return (
    <div>
        <div>
            <label>Name</label>
            <input type="text" id="name" value={name} onChange={onChange}/>
        </div>
        <div>
            <label>email</label>
            <input type="email" id="email" value={email} onChange={onChange}/>
        </div>
        <div>
            <label>phoneNumber</label>
            <input type="tel" id="tel" value={tel} onChange={onChange}/>
        </div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone number: {tel}</p>
    </div>
  );
};


export default Input2;
