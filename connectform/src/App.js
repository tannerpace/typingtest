import "./App.css";
import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
import SimpleTimer from "./components/Timer/SimpleTimer";

function App() {
  const [wordCount, setWordCount] = useState("0");
  const [value, setValue] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((oldValue) => value);
    console.log(`value`, value);
  };

  const handleStart = () => {
    setIsStarted((isStarted) => !isStarted);
    if (isStarted) {
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    if (value === "") {
      return;
    }
    setWordCount(value.match(/(\w+)/g).length);
  };
  const eraseText = () => {
    document.getElementById("test").value = "";
    setValue("");
  };
  const handleReset = () => {
    setWordCount(0);
    eraseText();
    setIsStarted(false);
  };

  return (
    <div className="App">
      <h1>Typing Test</h1>
      <SimpleTimer
        seconds={60}
        handleSubmit={handleSubmit}
        isStarted={isStarted}
        stopTimer={(x) => setIsStarted(x)}
      />

      <button onClick={handleStart}>{!isStarted ? "Start" : "Stop"}</button>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>

      <textarea id="test" onChange={handleChange} />

      <h2>Word Count : {wordCount}</h2>
    </div>
  );
}

export default App;
