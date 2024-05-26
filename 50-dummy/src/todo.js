import { useReducer, useState } from "react";
const initialState = [];
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.text }];

    default:
      return initialState;
  }
}
function Todo() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  const [text, setTest] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add", text });
          setTest("");
        }}
      >
        <input value={text} onChange={(e) => setTest(e.target.value)} />
        <button type="submit">Add test</button>
      </form>
      <ul>
        {todos.map((list) => (
          <li key={list.id}>{list.text}</li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
