// Main app component
// import logo from './logo.svg';
import './App.css';
// import React from 'react';
// import ReminderList from './components/ReminderList';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React please CEN4010!!!
//         </a>
//       </header>
//     </div>
//   );
// }

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
