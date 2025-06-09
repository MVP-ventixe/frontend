import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <section>
      <h1>Welcome to the Dashboard</h1>
      <ul>
        <li>
          <Link to="/dashboard/events">View Events</Link>
        </li>
        <li>
          <Link to="/dashboard/bookings">View Bookings</Link>
        </li>
      </ul>
    </section>
  );
}