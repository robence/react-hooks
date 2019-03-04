import React, { FunctionComponent, useReducer } from "react";
import { increment, decrement } from '../redux/actions'
import { reducer } from '../redux/reducers'

const initialState = { count: 0 };

const Counter:FunctionComponent<{ count?: number }> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>
          + Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          + Decrement
        </button>
      </div>
      Current: { state.count }
    </div>
  );
};

export default Counter;
