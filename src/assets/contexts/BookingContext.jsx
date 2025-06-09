import React, { createContext, useContext, useEffect, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await fetch("https://ventixe-project-webapp.azurewebsites.net/api/Bookings");
      const data = await res.json();
      setBookings(data);
    };
    fetchBookings();
  }, []);

//   ChatGPT helped 
  return (
    <BookingContext.Provider value={{ bookings, setBookings }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBookings = () => useContext(BookingContext);