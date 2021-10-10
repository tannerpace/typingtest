import React, { useState, useEffect } from "react"

const SimpleTimer = (props) => {
  const { seconds, isStarted, stopTimer, timerSubmit, setTimeRemaining } = props

  useEffect(() => {
    if (seconds > 0 && isStarted) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1)
      }, 1000)
    } else if (seconds < 1) {
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
