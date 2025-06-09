import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'
import Login from './assets/pages/Login'
import Bookings from './assets/pages/Bookings'
import Dashboard from './assets/pages/Dashboard';
import SignUp from './assets/pages/SignUp'
import Events from './assets/pages/Events'
import Calendar from './assets/pages/Calendar';


function App() {
  return (

        <Routes>
  
  <Route element={<CenterLayout />}>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
  </Route>

  
  <Route element={<PortalLayout />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/dashboard/events" element={<Events />} />
    <Route path="/dashboard/bookings" element={<Bookings />} />
    <Route path="/dashboard/calendar" element={<Calendar />} />
  </Route>

  
  <Route path="/" element={<Navigate to="/dashboard" replace />} />
  <Route path="*" element={<Navigate to="/dashboard" replace />} />
</Routes>

  )
}

export default App
