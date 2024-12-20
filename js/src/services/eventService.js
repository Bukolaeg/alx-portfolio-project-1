import axios from 'axios';

const API_BASE = 'http://localhost:5000/api'; 

export const fetchEvents = async () => {
  const response = await axios.get(`${API_BASE}/events`);
  return response.data;
};

export const createEvent = async (eventData) => {
  const response = await axios.post(`${API_BASE}/events`, eventData);
  return response.data;
};

