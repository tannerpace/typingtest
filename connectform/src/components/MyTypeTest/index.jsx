import React, { useEffect, useState } from "react"
import Typewriter from "typewriter-effect"

const MyTypeTest = (props) => {
  const [stuff, setStuff] = useState("")
  const { isStarted } = props

  useEffect(() => {
    fetch(`https://random-word-api.herokuapp.com/word?number=10`)
      .then((response) => response.json())
      .then((data) => {
        setStuff(data)
      })
  }, [isStarted])

  let text = stuff.toString().replace(/,/g, " ")

  return (
    <>
      {isStarted ? (
        <>
          <Typewriter
            options={{
              strings: [text],
              autoStart: true,
              loop: false,
              changeDelay: true,
            }}
          />
        </>
      ) : (
        <h2>Get Ready!</h2>
      )}
    </>
  )
}

export default MyTypeTest
