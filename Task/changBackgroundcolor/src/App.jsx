import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  return (
    <div
      style={{
        width: "100%",
        height: "560px",
        backgroundColor: backgroundColor,
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        {/* 1 */}
        <button
          onClick={() => setBackgroundColor("red")}
          style={{
            backgroundColor: "red",
            width: "150px",
            height: "150px",
            color: "white",
            border: "2px solid black",
            fontSize: "30px",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          Red
        </button>

        {/*  2 */}
        <button
          onClick={() => setBackgroundColor("green")}
          style={{
            backgroundColor: "green",
            width: "150px",
            height: "150px",
            color: "white",
            border: "2px solid black",
            fontSize: "30px",
            borderRadius: "50%",
          }}
        >
          Green
        </button>

        {/* 3 */}
        <button
          onClick={() => setBackgroundColor("blue")}
          style={{
            backgroundColor: "blue",
            width: "150px",
            height: "150px",
            color: "white",
            border: "2px solid black",
            fontSize: "30px",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          Blue
        </button>

        {/* 4 */}
        <button
          onClick={() => setBackgroundColor("yellow")}
          style={{
            backgroundColor: "yellow",
            width: "150px",
            height: "150px",
            color: "white",
            border: "2px solid black",
            fontSize: "30px",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          Yellow
        </button>

        {/*  5 */}
        <button
          onClick={() => setBackgroundColor("purple")}
          style={{
            backgroundColor: "purple",
            width: "150px",
            height: "150px",
            color: "white",
            border: "2px solid black",
            fontSize: "30px",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          Purple
        </button>
        {/* 6 */}
        <button
          onClick={() => setBackgroundColor("orange")}
          style={{
            backgroundColor: "Orange",
            width: "150px",
            height: "150px",
            color: "white",
            border: "2px solid black",
            fontSize:"30px",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          Orange
        </button>

        {/* 7 */}
        <button
          onClick={() => setBackgroundColor("black")}
          style={{
            backgroundColor: "black",
            width: "150px",
            height: "150px",
            color: "white",
            fontSize:"30px",
            border: "2px solid black",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
