// File: src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(""); // State for first number
  const [num2, setNum2] = useState(""); // State for second number
  const [result, setResult] = useState(null); // State for result

  // Arithmetic operation handlers
  const handleAdd = () => setResult(Number(num1) + Number(num2));
  const handleSubtract = () => setResult(Number(num1) - Number(num2));
  const handleMultiply = () => setResult(Number(num1) * Number(num2));
  const handleDivide = () => {
    if (Number(num2) === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Arithmetic Operations in React</h1>
      <div style={{ margin: "20px" }}>
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={{ padding: "5px" }}
        />
      </div>

      <div style={{ margin: "20px" }}>
        <button onClick={handleAdd} style={{ margin: "5px", padding: "10px" }}>
          Add
        </button>
        <button onClick={handleSubtract} style={{ margin: "5px", padding: "10px" }}>
          Subtract
        </button>
        <button onClick={handleMultiply} style={{ margin: "5px", padding: "10px" }}>
          Multiply
        </button>
        <button onClick={handleDivide} style={{ margin: "5px", padding: "10px" }}>
          Divide
        </button>
      </div>

      <h2>Result: {result !== null ? result : "--"}</h2>
    </div>
  );
}

export default App;
