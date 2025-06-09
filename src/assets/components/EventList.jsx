import React, { useEffect, useState } from 'react'
import { EventItem } from './EventItem'

const EventList = () => {
    const [events, setEvents] = useState([])

    const fallbackEvents = [
    {
        id: 1, name: 'Sample Event 1', date: '2025-06-10', location: 'Stockholm', description: 'A fun event in Stockholm.', image: '/Images/sample1.jpg', price: 100
    },
    {
        id: 2, name: 'Sample Event 2', date: '2025-06-12', location: 'Gothenburg', description: 'Another great event.', image: '/Images/sample2.jpg', price: 150
    },
    {
        id: 3, name: 'Sample Event 3', date: '2025-06-15', location: 'Malmö', description: 'Don\'t miss this!', image: '/Images/sample3.jpg', price: 200
    },
    ]

    // ChatGPT hjälpt med fallback events och felhantering
    const getEvents = async () => {
        try {
            const res = await fetch('https://ventixe-project-webapp.azurewebsites.net/api/Events')
            if (res.ok) {
                const response = await res.json()
                const data = Array.isArray(response.result) ? response.result : response
                setEvents(data)
            } else {
                console.error('Failed to fetch events', res.status)
                setEvents(fallbackEvents)
            }
        } catch (error) {
            console.error('Failed to fetch events', error)
            setEvents(fallbackEvents)
        }
    }


    useEffect(() => {
        getEvents()
    }, [])


    return (
        <section id='Events' className='Event-list-container'> 
            {
            events.map(event => (<EventItem key={event.id} item={event} />))
            }
        </section>
    )
}

export default EventList