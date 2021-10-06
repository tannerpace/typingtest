
import './App.css';
import React, { useState, useEffect } from 'react'


function App() {
  const [wordCount, setWordCount] = useState('0')
  const [value, setvalue] = useState({})


  const handleChange = (e) => {
    const { name, value } = e.target
    setvalue((oldValue) => (value))
  }

  let str = value
  const howMany = () => str.match(/(\w+)/g).length;

  const handleSubmit = () => {
    setWordCount(howMany)
  }

  return (
    <div className="App">
      <h1>Typing Test</h1>
      <pre>{JSON.stringify(value)}</pre>
      <textarea onChange={handleChange} />
      <h4>Time Remaining</h4>
      <button onClick={handleSubmit}>Start</button>
      <h1>{wordCount}</h1>
    </div>
  );
}

export default App;
