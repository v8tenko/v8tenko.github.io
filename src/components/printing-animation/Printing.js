/* eslint-disable react-hooks/exhaustive-deps */
import React, {useLayoutEffect, useRef, useState} from "react";
import './Printing.css'

export default function Printing({time = 5, delay, children, className, showCursor = false}) {
  const [content, setContent] = useState('')
  const [blinking, setBlinking] = useState(false)
  const currentProcess = useRef(0)
  const processesMap = useRef(new Map())
  let stop = false

  function updateCursor(state) {
    if (stop) {
      return
    }
    setBlinking(state)
  }

  function printDelayed(string, i, id) {
    if (stop) {
      return
    }
    if (!processesMap.current.get(id)) {
      return
    }
    if (i >= string.length) {
      processesMap.current.set(id, false)
      setTimeout(() => updateCursor(true), 200)
      return
    }
    if (i === 0) {
      setBlinking(false)
    }
    setContent(prevState => prevState + string[i])
    setTimeout(() => printDelayed(string, i + 1, id), delay ?? time / string.length)
  }

  useLayoutEffect(() => {
    const string = React.Children.toArray(children).filter(element => element !== ' ')[0]
    processesMap.current.set(currentProcess.current - 1, false)
    processesMap.current.set(currentProcess.current, true)
    setContent('')
    printDelayed(string, 0, currentProcess.current)
    currentProcess.current++
    return () => {
      stop = true
    }
  }, [children])
  return (
    <div className="printing">
      <p className={className}> {content} </p>
      {showCursor ? <div className={`cursor${blinking ? ' blinking' : ''}`}/> : <></>}
    </div>
  )
}

