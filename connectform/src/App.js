import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [wordCount, setWordCount] = useState("0");
  const [value, setvalue] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setvalue((oldValue) => value);
  };

  // run match on the input value and then get length which is how many
  const handleSubmit = () => {
    setWordCount(value.match(/(\w+)/g).length);
  };

  return (
    <div className="App">
      <h1>Typing Test</h1>
      <pre>{JSON.stringify(value)}</pre>
      <textarea onChange={handleChange} />
      <h4>Time Remaining</h4>
      <button onClick={handleSubmit}>Start</button>
      <h1>Word Count : {wordCount}</h1>
    </div>
  );
}

export default App;
