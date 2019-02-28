import React, { FunctionComponent, useState } from "react";



const Counter:FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {
  // since we pass a number here, clicks is going to be a number.
  // setClicks is a function that accepts either a number or a function returning
  // a number
  const [count, setCount] = useState(initial);

  return (
      <div>
        <button onClick={() => setCount(count + 1)}>+ Increment</button>
        <button onClick={() => setCount(count - 1)}>+ Decrement</button>
      <div>Current: {count}</div>
    </div>
  );
};

export default Counter;
