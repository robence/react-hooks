import React, { useState } from "react";

export default function counterHook() {
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
}
