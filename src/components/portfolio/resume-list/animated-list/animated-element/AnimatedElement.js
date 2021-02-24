import React, {forwardRef, useLayoutEffect, useRef, useState} from 'react'
import './AnimatedElement.css'

export const AnimatedElement = forwardRef(({children, isRemoving, onClick}, ref) => {

  const boundingBox = useRef({})
  const prevBoundingBox = useRef(null)

  const [translate, setTranslate] = useState({
    y: 0
  })

  const [time, setTime] = useState(0)

  useLayoutEffect(() => {
    prevBoundingBox.current = boundingBox.current
    boundingBox.current = positionInDocument(ref.current)
    const changeInY = prevBoundingBox.current.top - boundingBox.current.top
    if (isNaN(changeInY)) {
      return
    }
    setTranslate({
      y: prevBoundingBox.current.top - boundingBox.current.top,
    })
    requestAnimationFrame(() => {
      setTime(200)
      setTranslate({
        y: 0
      })
      requestAnimationFrame(() => {
        setTime(0)
      })

    })
  }, [prevBoundingBox, ref, children])

  return (
    <div
      className={`wrap${isRemoving ? ' removing' : ''}`}
      onClick={onClick}
      ref={ref}
      style={{
        transition: `all ${time}ms`,
        transform: `translateY(${translate.y}px)`,
      }}
    >
      {children}
    </div>
  )
})


function positionInDocument(element) {
  const rect = element.getBoundingClientRect()
  return {
    top: rect.top + window.scrollY,
    left: rect.left
  }
}
