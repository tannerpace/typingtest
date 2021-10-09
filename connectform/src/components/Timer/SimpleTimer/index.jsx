import React, { useState, useEffect } from "react"

const SimpleTimer = (props) => {
  const { seconds, isStarted, stopTimer, timerSubmit, setTimeRemaining } = props
  // const [timeRemaining, setTimeRemaining] = useState(seconds)

  useEffect(() => {
    if (seconds > 0 && isStarted) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1)
      }, 1000)
    } else if (seconds === 0) {
      stopTimer(false)
      timerSubmit()
    }
  }, [seconds, isStarted, seconds])

  return (
    <div>
      <h2>Time remaining: {seconds}</h2>
    </div>
  )
}

export default SimpleTimer
