import "./App.css"
import React, { useState, useEffect, useRef } from "react"
import SimpleTimer from "./components/Timer/SimpleTimer"
import MyTypeTest from "./components/MyTypeTest"

function App() {
  const [wordCount, setWordCount] = useState("0")
  const [value, setValue] = useState("")
  const [isStarted, setIsStarted] = useState(false)
  const [seconds, setSeconds] = useState(60)
  const [stuff, setStuff] = useState("")
  const [swear, setSwear] = useState(1)
  const inputRef = useRef(null)
  const handleChange = (e) => {
    const { name, value } = e.target
    setValue((oldValue) => value)
  }

  const handleStart = () => {
    setIsStarted((isStarted) => !isStarted)
    inputRef.current.disabled = false
    inputRef.current.focus()
  }
  const handleStop = () => {
    if (isStarted) {
      handleSubmit()
      inputRef.current.disabled = true
    }
    setIsStarted((isStarted) => !isStarted)
  }
  const handleSubmit = (event) => {
    if (value === "") {
      return
    }
    setWordCount(value.match(/(\w+)/g).length)
  }
  const eraseText = () => {
    document.getElementById("test").value = ""
    setValue("")
  }
  const handleReset = () => {
    setSeconds(60)
    setWordCount(0)
    eraseText()
  }

  const ResetButton = () => {
    return (
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    )
  }

  const StartButton = () => {
    return <button onClick={handleStart}>Start</button>
  }
  const StopButton = () => {
    return (
      <button className="stopButton" onClick={handleStop}>
        Stop
      </button>
    )
  }

  const PlaceHoldersButton = () => {
    return <button className="placeHolder">Im a placeholder</button>
  }

  const hint = !isStarted ? "Click the START button!" : "Start Typing Now!"

  class Toggle extends React.Component {
    constructor(props) {
      super(props)
      this.state = { isToggleOn: true }

      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      this.setState((prevState) => ({
        isToggleOn: !prevState.isToggleOn,
      }))
    }

    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
      )
    }
  }

  return (
    <div className="App">
      {!isStarted ? <h1>Typing Test</h1> : <h1>Start Typing!</h1>}
      {/* {!isStarted ? (
        <h2>
          <label>Swear Words</label>
          <Toggle onClick={() => setSwear(!swear)}></Toggle>
        </h2>
      ) : (
        <></>
      )} */}
      <MyTypeTest isStarted={isStarted} swear={swear} />
      <SimpleTimer
        seconds={`${seconds}`}
        isStarted={isStarted}
        stopTimer={(x) => setIsStarted(x)}
        timerSubmit={() => handleSubmit()}
        setTimeRemaining={(x) => setSeconds(x)}
      />

      {!isStarted ? <StartButton /> : <StopButton />}
      {!isStarted ? <ResetButton /> : <PlaceHoldersButton />}

      <textarea
        id="test"
        onChange={handleChange}
        disabled={!isStarted}
        placeholder={hint}
        ref={inputRef}
      />

      <h2>Word Count : {wordCount}</h2>
    </div>
  )
}

export default App
