import React, { useReducer } from "react";

const initialState = { count: 0 };

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error("Unexpected action");
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <button onClick={() => dispatch({ type: INCREMENT })}>
          + Increment
        </button>
        <button onClick={() => dispatch({ type: DECREMENT })}>
          + Decrement
        </button>
      </div>
      Current: {state.count}
    </div>
  );
};

export default Counter;
