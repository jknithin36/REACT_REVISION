import React, { useReducer } from "react";
const initialValue = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    default:
      return initialValue;
  }
}
function Counter1() {
  const buttonStyle = {
    color: "white",
    backgroundColor: "#000",
    height: "50px",
    width: "100px",
    borderRadius: "10px",
    margin: "20px",
    cursor: "pointer",
  };

  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <h1 style={{ color: "red", fontSize: "30px" }}>
        Counter using useReducer
      </h1>
      <p style={{ color: "green", fontSize: "24px" }}>count:{state.count}</p>
      <button
        style={buttonStyle}
        onClick={() => dispatch({ type: "increment" })}
      >
        Increase
      </button>
      <button style={buttonStyle}>Decrease</button>
      <button style={buttonStyle}>Reset</button>
    </>
  );
}

export default Counter1;
