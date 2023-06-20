import {  Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import Addtask from "./components/Addtask";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
   
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<Tasks />} />
          <Route path="/add" element={<Addtask />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
  
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
