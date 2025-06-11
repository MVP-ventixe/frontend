import React from 'react'

export default function Calendar() {

  const days = Array.from({ length: 35 }, (_, i) =>  i < 31 ? i + 1 : i - 30);

  if (days.length < 31) {
    const remainingDays = 31 - days.length;
  
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
