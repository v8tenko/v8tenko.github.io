import React from 'react'
import './Title.css'

export default function Title({children}) {
  const title = React.Children.toArray(children).filter(element => element !== '')[0].slice(1, -1)
  return (
    <div>
      <div id={`${title}-before`}/>
      <h1 className="global-title"> {title} </h1>
    </div>
  )
}
