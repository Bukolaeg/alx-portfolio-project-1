import React, { useEffect, useState } from 'react';
import { fetchUserEvents } from '../services/eventService';
import EventCard from '../components/EventCard';
import './DashboardPage.css';

const DashboardPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getUserEvents = async () => {
      const data = await fetchUserEvents();
      setEvents(data);
    };

    getUserEvents();
  }, []);

  return (
    <div className="dashboard">
      <h2>My Events</h2>
      <div className="event-list">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
