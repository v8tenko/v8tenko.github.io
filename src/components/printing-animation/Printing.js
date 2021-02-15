import React, {useEffect, useRef, useState} from "react";
import './Printing.css'

export default function Printing({time = 5, children, className, showCursor = false}) {
  const [content, setContent] = useState('')
  const [blinking, setBlinking] = useState(false)
  const currentProcess = useRef(0)
  const processesMap = useRef(new Map())

  function printDelayed(string, i, id) {
    if (!processesMap.current.get(id)) {
      return
    }
    if (i >= string.length) {
      processesMap.current.set(id, false)
      setTimeout(() => setBlinking(true), 200)
      return
    }
    if (i === 0) {
      setBlinking(false)
    }
    setContent(prevState => prevState + string[i])
    setTimeout(() => printDelayed(string, i + 1, id), time / string.length)
  }

  useEffect(() => {
    const string = React.Children.toArray(children).filter(element => element !== ' ')[0]
    processesMap.current.set(currentProcess.current - 1, false)
    processesMap.current.set(currentProcess.current, true)
    setContent('')
    printDelayed(string, 0, currentProcess.current)
    currentProcess.current++
  }, [children])
  return (
    <div className="printing">
      <p className={className}> {content} </p>
      {showCursor ? <div className={`cursor${blinking ? ' blinking' : ''}`}/> : <></>}
    </div>
  )
}

