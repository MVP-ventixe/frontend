import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Bookings = () => {
  const { id } = useParams()
  const [event, setEvent] = useState({})
  const [formData, setFormData] = useState({ eventId: id, fullname: '', email: '', phone: '', ticketCount: 1, notes: '', city: '', postalcode: '', country: '' })

  useEffect(() => {
    if (id) {
      const getEvent = async () => {
        try {
          const res = await fetch(`https://ventixe-project-webapp.azurewebsites.net/api/Events/${id}`)
          if (res.ok) {
            const response = await res.json()
            setEvent(response.result || response)
            setFormData(f => ({ ...f, eventId: id }))
          } else {
            console.error('Failed to fetch event', res.status)
          }
        } catch (error) {
          console.error('Failed to fetch event', error)
        }
      }
      getEvent()
    }
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(f => ({
      ...f,
      [name]: name === 'tickets' ? Number(value) : value
    }))
  }

  const postbooking = async (bookingData) => {
    try {
      const res = await fetch('https://bookingservice-ventixe-mvp-acfvczdnhkfmgwez.swedencentral-01.azurewebsites.net/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      })
      if (!res.ok) {
        throw new Error('Failed to book event')
      }
      return await res.json()
    } catch (error) {
      console.error('Booking failed', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await postbooking(formData)
  }

  return (
  <div className='Bookings-container'>
    <h1>Book event here - {event.name}</h1>
    <div className='Bookings-form'>
      <form onSubmit={handleSubmit}>
        <div className=''>
          <label>Full Name</label>
          <input className='Input-field' type='text' id='fullname' name='fullname' required value={formData.fullname} onChange={handleChange}/>
        </div>
        <div>
          <label>Email</label>
          <input className='Input-field' type='email' id='email' name='email' required value={formData.email} onChange={handleChange}/>
        </div>
        <div>
          <label>Phone</label>
          <input className='Input-field' type='tel' id='phone' name='phone' required value={formData.phone} onChange={handleChange}/>
        </div>
        <div>
          <label>Number of Tickets</label>
          <input className='Input-field' type='number' id='ticketCount' name='ticketCount' min='1' required value={formData.ticketCount} onChange={handleChange}/>
        </div>
        <div className='textarea-container'>
          <label>Extra info</label>
          <textarea className='Input-textarea' id='notes' name='notes' value={formData.notes} onChange={handleChange} />
        </div>
        <di >
          <label>City</label>
          <input className='Input-field' id='city' name='city' value={formData.city} onChange={handleChange} />
        </di>
        <div >
          <label>Postalcode</label>
          <input className='Input-field' id='postalcode' name='postalcode' value={formData.postalcode} onChange={handleChange} />
        </div>
        <div>
          <label>Country</label>
          <input className='Input-field' id='country' name='country' value={formData.country} onChange={handleChange} />
        </div>
        <button type='submit' className='Booking-button'>Book Now</button>
      </form>
    </div>
  </div>
)
}

export default Bookings