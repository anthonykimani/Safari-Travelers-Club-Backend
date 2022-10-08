import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Schedules from '../pages/Schedules';
import BookDestination from '../pages/BookDestination';
import React, { useState, useEffect } from "react";
import { LoginContext } from '../contexts/LoginContext';

function App() {
  const [usersLogin, setUsersLogin] = useState([]);
  const [credentials,setCredentials] = useState({
    id:0,
    first_name:"not signed in",
    last_name:"..",
    email:"..",
  });
  const [destinationId,setDestinationId] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  //fetch user data
  useEffect(() => {
    fetch("https://safari-travelers-server.herokuapp.com/users")
      .then((response) => response.json())
      .then((data) => setUsersLogin(data));
  }, [isLoggedIn]);

  return (
    <div className="">
      <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn, destinationId, setDestinationId, usersLogin, setUsersLogin, credentials,setCredentials}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home   />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/destination" element={<BookDestination   />} />
        </Routes>
      </Router>
      </LoginContext.Provider>
    </div>
  )
}

export default App;
