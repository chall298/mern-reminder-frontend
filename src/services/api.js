// Axios setup for API requests
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5001/api' });

export const fetchReminders = () => API.get('/reminders');
export const createReminder = (newReminder) => API.post('/reminders', newReminder);
export const updateReminder = (id, updatedReminder) => API.put(`/reminders/${id}`, updatedReminder);
export const deleteReminder = (id) => API.delete(`/reminders/${id}`);

export default API;
