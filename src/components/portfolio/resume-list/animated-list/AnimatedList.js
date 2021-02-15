import React, {createRef, forwardRef} from 'react'
import './AnimatedList.css'
import {AnimatedElement} from "./animated-element/AnimatedElement";

export const AnimatedList = forwardRef(({children}, ref) => {
  return (
    <div className="animated-list">
      {
        React.Children.map(children, element => {
          return <AnimatedElement ref={ref}> {element} </AnimatedElement>
        })
      }
    </div>
  )
})
