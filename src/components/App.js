import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Schedules from '../pages/Schedules';
import BookDestination from '../pages/BookDestination';
import React, { useState, useEffect } from "react";

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
      <Router>
        <Routes>
          <Route path="/" element={<Home usersLogin={usersLogin} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} credentials={credentials} setCredentials={setCredentials} destinationId={destinationId} setDestinationId={setDestinationId} />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login usersLogin={usersLogin} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} credentials={credentials} setCredentials={setCredentials}/>} />
          <Route path="/signup" element={<Signup usersLogin={usersLogin} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} credentials={credentials} setCredentials={setCredentials}/>} />
          <Route path="/schedules" element={<Schedules usersLogin={usersLogin} credentials={credentials} setCredentials={setCredentials}/>} />
          <Route path="/destination" element={<BookDestination  usersLogin={usersLogin} credentials={credentials} setCredentials={setCredentials} destinationId={destinationId} setDestinationId={setDestinationId}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
