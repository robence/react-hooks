import React, { useReducer } from "react";

type ActionType = {
  type: 'reset' | 'decrement' | 'increment'
}

 interface stateType {
   count: number
 }

const initialState = { count: 0 };

// We only need to set the type here ...
function reducer(state: stateType, action: ActionType) {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Counter = ({ initialCount = 0 }) => {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });
  return (
    <div>
      <button onClick={() => dispatch({ type: 'increment' })}>+ Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>- Decrement</button>
      <div>Current: {state.count}</div>
    </div>
  );
}

export default Counter;
