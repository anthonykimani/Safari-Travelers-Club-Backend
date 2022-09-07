import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Register from '../pages/Register';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
