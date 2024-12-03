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
import { AppBar, Toolbar, Button, Typography, Box, Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import ReminderList from './components/ReminderList';
import ReminderForm from './components/ReminderForm';
import EditReminder from './pages/EditReminder';
//Logan MaterialUI feature
const App = () => {
  return (
    <Router>
     {/*Backdrop*/}
     {/* <Box sx = {{ minHeight: "100vh", bgcolor: "lightblue", display: "flex", flexDirection: "column"}}></Box> */}
      {/*Nav Bar*/}
      <AppBar position = "static" sx={{ bgcolor: "primary.main"}}>
        <Toolbar>
          <Typography variant = "h6" sx = {{ flexGrow: 1}}>
            Reminder App
          </Typography>
          <Button
            startIcon = {<HomeIcon />}
            component={Link}
            to="/"
            color="inherit"
            sx={{ textTransform: "none" }}
          >
            Home
          </Button>
          <Button
            startIcon = {<AddIcon />}
            component={Link}
            to="/add"
            color="inherit"
            sx={{ textTransform: "none"}}
          >
            Add Reminder
          </Button>
        </Toolbar>
      </AppBar>

      {/*Main content*/}
      <Container sx={{ py: 4, flex: 1}}>
        <Routes>
          <Route path="/" element={<ReminderList />} />
          <Route path="/add" element={<ReminderForm />} />
          <Route path="/edit/:id" element={<EditReminder />} />
          <Route
            path="*"
            element = {
              <Typography variant = "h6" align="center">
                404: Page Not Found
              </Typography>
            }
            />
        </Routes>
      </Container>

      {/*Footer*/}
      <Box
        component="footer"
        sx = {{
          bgcolor: "primary.main",
          color: "white",
          py: 2,
          textAlign: "center"
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} CEN4010 Reminder App. All rights reserved.
        </Typography>
      </Box>
    </Router>
    
  );
};


export default App;
