import { useState } from "react";
import Button from "./button";
export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>Practiced UseState</p>
      <h1>You Clicked button {count} times</h1>
      <Button handleClick={handleClick}>ClickMe</Button>
    </div>
  );
}
