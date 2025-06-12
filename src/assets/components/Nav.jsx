import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Nav = () => {
    return (
    <nav className='Nav-container'>
      <div className='Nav-content'>
        <div className='Ventixe_logo_container'>
          <NavLink to="/dashboard" className='Ventixe_logo_link'>
          <img className='Ventixe_logo' src="/Images/Ventixe_Logo.svg" alt="Ventixe_logo" />
          <span className='Ventixe_title'>Ventixe</span>
          </NavLink>
        </div>
        <div className='Nav_container_items'>
          <ul>
            <li>
              <NavLink
                to="/dashboard/events"
                className={({ isActive }) => `Nav_item${isActive ? ' active' : ''}`}
              >
                
                <img className='Ventixe_logo' src="/Images/Event_Logo.svg" alt="Ventixe_logo" />
                <span>Events</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/bookings"
                className={({ isActive }) => `Nav_item${isActive ? ' active' : ''}`}
              >
                <img className='Ventixe_logo' src="/Images/Booking_Logo.svg" alt="Ventixe_logo" />
                <span>Bookings</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/calendar"
                className={({ isActive }) => `Nav_item${isActive ? ' active' : ''}`}
              >
                <img className='Ventixe_logo' src="/Images/Calendar_Logo.svg" alt="Ventixe_logo" />
                <span>Calendar</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/inbox"
                className={({ isActive }) => `Nav_item${isActive ? ' active' : ''}`}
              >
                <img className='Ventixe_logo' src="/Images/Inbox_Icon.svg" alt="Ventixe_logo" />
                <span>Inbox</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
