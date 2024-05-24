import { useEffect, useState } from "react";
import Button from "./button";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => console.log("hello"), [counter]);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      console.log("No likes");
    }
  }
  return (
    <>
      <h1>{counter}</h1>
      <Button handleClick={increment}>Like</Button>
      <Button handleClick={decrement}>Dislike</Button>
    </>
  );
}
