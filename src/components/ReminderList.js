// To display all reminders
// import React, { useEffect, useState } from 'react';
// import { fetchReminders, deleteReminder } from '../services/api';
// import { Link } from 'react-router-dom';

// const ReminderList = () => {
//   const [reminders, setReminders] = useState([]);

//   useEffect(() => {
//     const getReminders = async () => {
//       try {
//         const { data } = await fetchReminders();
//         setReminders(data);
//       } catch (error) {
//         console.error('Error fetching reminders:', error.message);
//       }
//     };
//     getReminders();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await deleteReminder(id);
//       setReminders(reminders.filter((reminder) => reminder._id !== id));
//     } catch (error) {
//       console.error('Error deleting reminder:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Reminders</h2>
//       <ul>
//         {reminders.map((reminder) => (
//           <li key={reminder._id}>
//             <h3>{reminder.title}</h3>
//             <p>{reminder.description}</p>
//             <p>{new Date(reminder.date).toLocaleDateString()}</p>
//             <Link to={`/edit/${reminder._id}`}>
//               <button>Edit</button>
//             </Link>
//             <button onClick={() => handleDelete(reminder._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ReminderList;



import React, { useEffect, useState } from 'react';
import { fetchReminders, deleteReminder } from '../services/api';
import { Link } from 'react-router-dom';

const ReminderList = () => {
  const [reminders, setReminders] = useState([]);

  // Fetch reminders from the backend
  useEffect(() => {
    const getReminders = async () => {
      try {
        const { data } = await fetchReminders();
        setReminders(data);
      } catch (error) {
        console.error('Error fetching reminders:', error.message);
      }
    };
    getReminders();
  }, []);

  // Delete a reminder by ID
  const handleDelete = async (id) => {
    try {
      await deleteReminder(id);
      setReminders(reminders.filter((reminder) => reminder._id !== id));
    } catch (error) {
      console.error('Error deleting reminder:', error.message);
    }
  };

  // Format the date to avoid time zone issues
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toISOString().split('T')[0]; // Extracts YYYY-MM-DD
  };

  return (
    <div>
      <h2>Reminders</h2>
      <ul>
        {reminders.map((reminder) => (
          <li key={reminder._id}>
            <h3>{reminder.title}</h3>
            <p>{reminder.description}</p>
            <p>{formatDate(reminder.date)}</p>
            <Link to={`/edit/${reminder._id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => handleDelete(reminder._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReminderList;
