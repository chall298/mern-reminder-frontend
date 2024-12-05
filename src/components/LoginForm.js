// import React, { useState } from 'react';
// import { loginUser } from '../services/api';

// const LoginForm = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await loginUser(formData);
//       localStorage.setItem('token', data.token);
//       alert('Login successful');
//     } catch (error) {
//       console.error('Error logging in:', error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//         required
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;

// ================================================================

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate**
import { loginUser } from '../services/api';

const LoginForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // Initialize useNavigate**

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser(formData);
      localStorage.setItem('token', data.token); // Store token in localStorage
      setIsLoggedIn(true); // Set user as logged in PREVIOUS CODE
      alert('Login successful');
      navigate('/'); // Navigate to home page
      console.log('user data', data);
    } catch (error) {
      console.error('Error logging in:', error.message);
      alert('Login failed. check your credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
