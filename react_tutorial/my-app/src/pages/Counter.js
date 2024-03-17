import React, {useState} from "react";

const Counter = () => {

    const [num, setNumber] = useState(0);

    const increse = () => {
        setNumber(num + 1);
    }

    const decrese = () => {
        setNumber(num - 1); 
    }

    return (
        <div>
            <button onClick={increse}>+1</button>
            <button onClick={decrese}>-1</button>
            <p>{num}</p>
        </div>
    );
}

export default Counter;