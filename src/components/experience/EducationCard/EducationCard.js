import React from 'react'
import './EducationCard.css'

export default function EducationCard({place, date, post}) {
  return (
    <div className="experience-card">
      <h1 style={{
        color: '#a7c5eb'
      }}> {place} </h1>
      <p className="text-with-borders"> {date} </p>
      <p> {post} </p>
    </div>
  )
}
