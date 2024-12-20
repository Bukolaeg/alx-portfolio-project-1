import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RSVPButtons from '../components/RSVPButtons';
import GoogleMap from '../components/GoogleMap';
import { fetchEventById } from '../services/eventService';
import './EventDetailPage.css';

const EventDetailPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const getEvent = async () => {
      const data = await fetchEventById(eventId);
      setEvent(data);
    };

    getEvent();
  }, [eventId]);

  if (!event) return <p>Loading...</p>;

  return (
    <div className="event-detail">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Date: {new Date(event.date).toLocaleString()}</p>
      <p>Location: {event.location}</p>
      <GoogleMap location={event.location} />
      <RSVPButtons eventId={event._id} />
    </div>
  );
};

export default EventDetailPage;
