import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Bookings from './Bookings'

export const EventDetailsPage = () => {
  const { id } = useParams()
  const [event, setEvent] = useState(null)

    // ChatGPT 
  useEffect(() => {
    const getEvent = async () => {
      try {
        const res = await fetch(`https://ventixe-project-webapp.azurewebsites.net/api/Events/${id}`)
        if (res.ok) {
          const response = await res.json()
          setEvent(response.result || response)
        } else {
          console.error('Failed to fetch event', res.status)
        }
      } catch (error) {
        console.error('Failed to fetch event', error)
      }
    }
    getEvent()
  }, [id])

  return (
    <div className='Event-details-container'>
      <div>Event details</div>
      <div className='Event-details-button'>
        <Link 
        to={`/dashboard/bookings/${id}`} 
        className='Event-link'
        >Book Event
        </Link>
      </div>
    </div>
  )
}
