import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Register from '../pages/Register';
import React, { useState, useEffect } from "react";

function App() {
  const [usersLogin, setUsersLogin] = useState([]);
  const [credentials,setCredentials] = useState({
    first_name:"not signed in",
    last_name:"..",
    email:".."
  });

  //fetch user data
  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((response) => response.json())
      .then((data) => setUsersLogin(data));
  }, []);

  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home usersLogin={usersLogin} credentials={credentials} setCredentials={setCredentials}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register usersLogin={usersLogin} credentials={credentials} setCredentials={setCredentials}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
