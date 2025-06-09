import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Bookings = () => {
  const navigate = useNavigate()
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const { id } = useParams()
  const [event, setEvent] = useState({})
  const [formData, setFormData] = useState({ eventId: id, fullName: '', email: '', phoneNumber: '', ticketCount: 1, notes: '', city: '', postalCode: '', country: '' })


  //ChatGPT fixed the more complex fail-safe fetch logic
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
      [name]: name === 'ticketCount' ? Number(value) : value
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
      let errorMsg = 'Failed to book event';
      try {
        const errorData = await res.json();
        errorMsg = errorData.message || JSON.stringify(errorData);
      } catch {}
      throw new Error(errorMsg);
    }
    return await res.json();
  } catch (error) {
    throw error;
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSuccess('')
    setError('')
    try {
    await postbooking(formData);
    setSuccess('Booking successful!');
    navigate('/events');
  } catch (err) {
    setError(err.message || 'Booking failed. Please try again.');
  }
};

  return (
  <div className='Bookings-container'>
    <h1>Book event here - {event.name}</h1>
    {success && <div style={{ color: 'green' }}>{success}</div>}
    {error && <div style={{ color: 'red' }}>{error}</div>}
    <div className='Bookings-form'>
      <form onSubmit={handleSubmit}>
        <div className=''>
          <label>Full Name</label>
          <input className='Input-field' type='text' id='fullName' name='fullName' required value={formData.fullName} onChange={handleChange}/>
        </div>
        <div>
          <label>Email</label>
          <input className='Input-field' type='email' id='email' name='email' required value={formData.email} onChange={handleChange}/>
        </div>
        <div>
          <label>Phone</label>
          <input className='Input-field' type='tel' id='phoneNumber' name='phoneNumber' required value={formData.phoneNumber} onChange={handleChange}/>
        </div>
        <div>
          <label>Number of Tickets</label>
          <input className='Input-field' type='number' id='ticketCount' name='ticketCount' min='1' required value={formData.ticketCount} onChange={handleChange}/>
        </div>
        <div className='textarea-container'>
          <label>Extra info</label>
          <textarea className='Input-textarea' id='notes' name='notes' value={formData.notes} onChange={handleChange} />
        </div>
        <div >
          <label>City</label>
          <input className='Input-field' id='city' name='city' value={formData.city} onChange={handleChange} />
        </div>
        <div>
          <label>Postalcode</label>
          <input className='Input-field' id='postalCode' name='postalCode' value={formData.postalCode} onChange={handleChange} />
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