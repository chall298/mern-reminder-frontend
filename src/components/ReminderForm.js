// For adding/updating reminders
// import React, { useState } from 'react';
// import { createReminder } from '../services/api';

// const ReminderForm = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     date: '',
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createReminder(formData);
//       alert('Reminder added successfully');
//       setFormData({ title: '', description: '', date: '' });
//     } catch (error) {
//       console.error('Error adding reminder:', error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Title"
//         value={formData.title}
//         onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//         required
//       />
//       <textarea
//         placeholder="Description"
//         value={formData.description}
//         onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//         required
//       />
//       <input
//         type="date"
//         value={formData.date}
//         onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//         required
//       />
//       <button type="submit">Add Reminder</button>
//     </form>
//   );
// };

// export default ReminderForm;
import React, { useState } from 'react';
import { createReminder } from '../services/api';

const ReminderForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Normalize date to UTC before sending to the backend
    const normalizedDate = new Date(formData.date);
    normalizedDate.setUTCHours(0, 0, 0, 0);

    try {
      await createReminder({
        ...formData,
        date: normalizedDate.toISOString(), // Send the normalized UTC date
      });
      alert('Reminder added successfully');
      setFormData({ title: '', description: '', date: '' });
    } catch (error) {
      console.error('Error adding reminder:', error.message);
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
      <button type="submit">Add Reminder</button>
    </form>
  );
};

export default ReminderForm;
