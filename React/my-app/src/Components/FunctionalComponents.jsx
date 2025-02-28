import { useState } from "react";

const FunctionalComponents = () => {
    const [count, setCount] = useState(0);

  function incrementHandler() {
    setCount(count + 100);
  }

  function decrementHandler() {
    setCount(count - 100);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => incrementHandler()}>Increase</button>
      <button onClick={() => decrementHandler()}>Decrement</button>
      <button onClick={() => resetHandler()}>Reset</button>
    </div>
  );
};

export default FunctionalComponents;
