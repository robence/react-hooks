import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <button onClick={() => setCount(count + 1)}>+ Increment</button>
        <button onClick={() => setCount(count - 1)}>+ Decrement</button>
      </div>
      <div>Current: {count}</div>
    </div>
  );
};

export default Counter;
