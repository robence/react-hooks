import React, { useState } from "react";

interface CounterProps {
  count: number;
}

const Counter = (props: CounterProps) => {

  return (
    <div>
      <div>Current: {props.count}</div>
    </div>
  );
};

export default Counter;
