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
  const [normal, setNormal] = useState(true)
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
    handleSubmit()
    setIsStarted((isStarted) => !isStarted)
    setSeconds(60)
    inputRef.current.disabled = true
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

  // const setDisabled = () => {
  //   if (seconds < 1) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  const ResetButton = () => {
    return (
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    )
  }

  const StartButton = () => {
    return (
      <button
        className="startButton"
        onClick={handleStart}
        // disabled={setDisabled}
      >
        Start
      </button>
    )
  }
  const StopButton = () => {
    // setSeconds(60)
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

  const Toggle = () => {
    const handleToggle = () => {
      setNormal(!normal)
    }
    return (
      <button className="toggle" onClick={handleToggle}>
        {normal ? "Normal" : "Code Mode"}
      </button>
    )
  }

  return (
    <div className="App">
      {!isStarted ? <h1>Typing Test</h1> : <h1>Start Typing!</h1>}
      <MyTypeTest isStarted={isStarted} normal={normal} />
      {isStarted ? <StopButton /> : <StartButton />}

      <textarea
        className="inputBox"
        id="test"
        onChange={handleChange}
        disabled={!isStarted}
        placeholder={hint}
        ref={inputRef}
      />
      {isStarted ? (
        <SimpleTimer
          seconds={seconds}
          isStarted={isStarted}
          stopTimer={(x) => setIsStarted(x)}
          timerSubmit={() => handleStop()}
          setTimeRemaining={(x) => setSeconds(x)}
        />
      ) : (
        <>
          {" "}
          <h2>Word Count : {wordCount}</h2>
        </>
      )}

      <PlaceHoldersButton />
      {!isStarted ? <ResetButton /> : <>{/* <Badge /> */}</>}
      <Toggle />
    </div>
  )
}

export default 