// Page for editing an existing reminder
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateReminder, fetchReminders } from '../services/api';

const EditReminder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
  });

  useEffect(() => {
    const getReminder = async () => {
      try {
        const { data } = await fetchReminders();
        const reminder = data.find((rem) => rem._id === id);
        if (reminder) {
          setFormData({
            title: reminder.title,
            description: reminder.description,
            date: reminder.date.split('T')[0], // Format date
          });
        }
      } catch (error) {
        console.error('Error fetching reminder:', error.message);
      }
    };
    getReminder();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateReminder(id, formData);
      alert('Reminder updated successfully');
      navigate('/');
    } catch (error) {
      console.error('Error updating reminder:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
      />
      <button type="submit">Update Reminder</button>
    </form>
  );
};

export default EditReminder;
