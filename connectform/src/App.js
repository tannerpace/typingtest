import "./App.css";
import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";

function App() {
  const [wordCount, setWordCount] = useState("0");
  const [value, setvalue] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setvalue((oldValue) => value);
  };

  // run match on the input value and then get length which is how many
  const handleSubmit = () => {
    console.log(`value`, value);
    if (value === "") {
      return;
    }
    setWordCount(value.match(/(\w+)/g).length);
  };

  return (
    <div className="App">
      <h1>Typing Test</h1>
      <textarea onChange={handleChange} />
      <button onClick={handleSubmit}>Start</button>
      <h1>Timer : </h1>
      <Timer initialSeconds={5} initialMinute={4} />
      <h1>Word Count : {wordCount}</h1>
    </div>
  );
}

export default App;
