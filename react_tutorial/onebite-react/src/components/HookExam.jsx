/**
 * Hook
 * 1. it can be only called in function comp or inside of other hooks.
 * 2. it can not be called conditionally.
 * 3. Custom Hook can be created
 */

import useInput from "../hooks/userInput";

const HookExam = () => {
  const [input, onChange] = useInput(); // using custom hook
  const [input2, onChange2] = useInput(); // using custom hook

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
