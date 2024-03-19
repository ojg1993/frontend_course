import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // clean up function triggering by returning another callback function
    return () => {
      console.log("Unmount");
    };
  }, []);

  return <div>Even number</div>;
};

export default Even;
