import React from 'react'
import { Link } from 'react-router-dom'

export const EventItem = ({item}) => {
  return (
    <Link to={`/events/${item.id}`} className='Event-card-link'>
    <div className='Event-card'>
      <div className='Event-card-content'>
        <div className='Event-card-image-container'>
          <div className='Event-card-image'>
            <img src={item.image} />
          </div>
        </div>
            <div className='Event-card-Details'>
              <div className='Event-card-date'>
                {item.date}
              </div>
              <div className='Event-card-name'>
              {item.name}
                </div>
              <div className='Event-card-location'>
                <img src='/Images/Location_Icon.svg' alt='location icon' className='Event-card-location-icon' />
                {item.location}
              </div>
              <div className='Event-card-description'>
                {item.description}
              </div>
              <div className='Event-card-price'>
                {item.price && <span className='Event-card-price'>${item.price}</span>}
              </div>
            </div>
      </div>
    </div>
    </Link>
  )
}
