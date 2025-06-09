import React from "react";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  // Tagit hjälp av ChatGPT för att skapa en funktion som returnerar titeln baserat på URL:en
 const getTitle = () => {
  const { pathname } = location;
  const segments = pathname.split('/');

  if (segments[1] === 'dashboard') {
    if (segments[2] === 'events') return 'Events';
    if (segments[2] === 'bookings') return 'Bookings';
    if (segments[2] === 'calendar') return 'Calendar';
    return 'Dashboard';
  }
  if (segments[1] === 'events' && segments[2]) return 'Event Details';
  return 'Dashboard';
};
  return (
    <header className="header-section-container">
      <div className="header-container">
        <span className="header-title">{getTitle()}</span>
        <div className="header-actions">
          <button className="Notification-button">
            <img
              className="Notification-icon"
              src="/Images/Notification_Icon.svg"
              alt="Notifications"
            />
          </button>
          <button className="Settings-button"> 
            <img
              className="Settings-icon"
              src="/Images/Settings_Icon.svg"
              alt="Settings"
            />
          </button>
          <div className="User-profile">
            <img
              className="User-profile-image"
              src="/Images/User_Profile.svg"
              alt="User Profile"
            />
            <span className="User-profile-name">John Doe</span>
          </div>
        </div>
      </div>
    </header>
  );
};
