import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./slice";

export function Counter() {
  const count = useSelector((state) => state);
  console.log(count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        {/* <span>{count}</span> */}
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
