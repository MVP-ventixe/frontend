import React from 'react'

export default function Calendar() {

  const days = Array.from({ length: 35 }, (_, i) => i + 1);

  if (days.length < 31) {
    
  }
  return (
    <div className='Calendar-container'>
      <div className='Calendar-grid'>
        {days.map(day => (<div className='Calendar-card'>
        {day}
        </div>
        ))}
        Calendar
      </div>
    </div>
  )
}
