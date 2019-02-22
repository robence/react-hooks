import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error("Unexpected action");
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>
          + Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          + Decrement
        </button>
      </div>
      Current: {count}
    </div>
  );
};

export default Counter;
