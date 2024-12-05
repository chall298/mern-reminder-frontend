// Main app component
// DO NOT TOUCH
// import './App.css';


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import ReminderList from './components/ReminderList';
// import ReminderForm from './components/ReminderForm';
// import EditReminder from './pages/EditReminder';


// const App = () => {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/add">Add Reminder</Link>
//           </li>
//         </ul>
//       </nav>
//       <h1>Reminder App</h1>

//       <Routes>
//         <Route path="/" element={<ReminderList />} />
//         <Route path="/add" element={<ReminderForm />} />
//         <Route path="/edit/:id" element={<EditReminder />} />
//       </Routes>
//     </Router>
    
//   );
// };


// export default App;

// ===============================================================================================

// import './App.css';

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import ReminderList from './components/ReminderList';
// import ReminderForm from './components/ReminderForm';
// import EditReminder from './pages/EditReminder';
// import LoginForm from './components/LoginForm';
// import RegisterForm from './components/RegisterForm';

// const App = () => {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/add">Add Reminder</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//           <li>
//             <Link to="/register">Register</Link>
//           </li>
//         </ul>
//       </nav>
//       <h1>Reminder App</h1>

//       <Routes>
//         {/* Existing Routes */}
//         <Route path="/" element={<ReminderList />} />
//         <Route path="/add" element={<ReminderForm />} />
//         <Route path="/edit/:id" element={<EditReminder />} />

//         {/* New Authentication Routes */}
//         <Route path="/login" element={<LoginForm />} />
//         <Route path="/register" element={<RegisterForm />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// ===============================================================================================

// import './App.css';
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import ReminderList from './components/ReminderList';
// import ReminderForm from './components/ReminderForm';
// import EditReminder from './pages/EditReminder';
// import LoginForm from './components/LoginForm';
// import RegisterForm from './components/RegisterForm';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check if the user is logged in
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     setIsLoggedIn(!!token); // Convert token to a boolean
//   }, []);

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//   };

//   return (
//     <Router>
//       <nav>
//         <ul>
//           {/* Show these links only when the user is logged in */}
//           {isLoggedIn && (
//             <>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/add">Add Reminder</Link>
//               </li>
//               <li>
//                 <button onClick={handleLogout}>Logout</button>
//               </li>
//             </>
//           )}
//           {/* Show these links only when the user is not logged in */}
//           {!isLoggedIn && (
//             <>
//               <li>
//                 <Link to="/login">Login</Link>
//               </li>
//               <li>
//                 <Link to="/register">Register</Link>
//               </li>
//             </>
//           )}
//         </ul>
//       </nav>
//       <h1>Reminder App</h1>

//       <Routes>
//         {/* Routes that are always available */}
//         <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
//         <Route path="/register" element={<RegisterForm />} />

//         {/* Routes that are only accessible when logged in */}
//         {isLoggedIn && (
//           <>
//             <Route path="/" element={<ReminderList />} />
//             <Route path="/add" element={<ReminderForm />} />
//             <Route path="/edit/:id" element={<EditReminder />} />
//           </>
//         )}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// ===============================================================================================

import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import ReminderList from './components/ReminderList';
import ReminderForm from './components/ReminderForm';
import EditReminder from './pages/EditReminder';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Convert token to a boolean
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <nav>
        <ul>
          {/* Show these links only when the user is logged in */}
          {isLoggedIn && (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add">Add Reminder</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
          {/* Show these links only when the user is not logged in */}
          {!isLoggedIn && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <h1>Reminder App</h1>

      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/" /> : <RegisterForm />}
        />

        {/* Protected Routes */}
        <Route
          path="/"
          element={isLoggedIn ? <ReminderList /> : <Navigate to="/login" />}
        />
        <Route
          path="/add"
          element={isLoggedIn ? <ReminderForm /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit/:id"
          element={isLoggedIn ? <EditReminder /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
