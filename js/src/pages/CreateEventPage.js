import React, { useState } from 'react';
import axios from 'axios';
import './CreateEventPage.css';

const CreateEventPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/events', formData); // Replace with your backend URL
      alert('Event created successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to create event');
    }
  };

  return (
    <div className="create-event-page">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEventPage;
