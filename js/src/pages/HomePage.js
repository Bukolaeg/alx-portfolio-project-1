import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import { fetchEvents } from '../services/eventService';
import './HomePage.css';

const HomePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const data = await fetchEvents();
      setEvents(data);
    };

    getEvents();
  }, []);

  return (
    <div className="homepage">
      <h2>Upcoming Events</h2>
      <div className="event-list">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
