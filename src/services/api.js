// Axios setup for API requests
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5001/api' });

// Add a request interceptor to include the token in headers**
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export const registerUser = (userData) => API.post('/users/register', userData);//**
export const loginUser = (userData) => API.post('/users/login', userData);//**

export const fetchReminders = () => API.get('/reminders');
export const createReminder = (newReminder) => API.post('/reminders', newReminder);
export const updateReminder = (id, updatedReminder) => API.put(`/reminders/${id}`, updatedReminder);
export const deleteReminder = (id) => API.delete(`/reminders/${id}`);

export default API;
