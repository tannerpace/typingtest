
import './App.css';
import React, { useState, useEffect } from 'react'


function App() {
  const [wordCount, setwordCount] = useState('0')
  const [value, setvalue] = useState({})


  const handleChange = (e) => {
    const { name, value } = e.target
    setvalue((oldValue) => (value))
  }





  return (
    <div className="App">
      <h1>Typing Test</h1>

      <textarea onChange={handleChange} />
      <h4>Time Remaining</h4>
      <button>Start</button>
      <h1>{wordCount}</h1>
    </div>
  );
}

export default App;
