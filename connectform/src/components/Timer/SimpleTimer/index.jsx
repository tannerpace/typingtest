import React, { useState, useEffect } from "react";

const SimpleTimer = (props) => {
  const { seconds, isStarted, stopTimer } = props;
  const [timeRemaining, setTimeRemaining] = useState(seconds);

  useEffect(() => {
    if (timeRemaining > 0 && isStarted) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      stopTimer(false);
    }
  }, [timeRemaining, isStarted]);

  return (
    <div>
      <h2>Time remaining: {timeRemaining}</h2>
    </div>
  );
};

export default SimpleTimer;
