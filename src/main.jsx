import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { AuthProvider } from './context/AuthContext.jsx'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { BookingProvider } from './assets/contexts/BookingContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <BookingProvider>
          <App />
      </BookingProvider>
    </BrowserRouter>
  </StrictMode>,
)
