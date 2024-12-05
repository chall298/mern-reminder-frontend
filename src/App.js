// Main app component
// DO NOT TOUCH
import './App.css';


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReminderList from './components/ReminderList';
import ReminderForm from './components/ReminderForm';
import EditReminder from './pages/EditReminder';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Reminder</Link>
          </li>
        </ul>
      </nav>
      <h1>Reminder App</h1>

      <Routes>
        <Route path="/" element={<ReminderList />} />
        <Route path="/add" element={<ReminderForm />} />
        <Route path="/edit/:id" element={<EditReminder />} />
      </Routes>
    </Router>
    
  );
};


export default App;
