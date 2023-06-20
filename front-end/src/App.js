import {  Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import Addtask from "./components/Addtask";
import Login from "./components/Login";
import Register from "./components/Register";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState([]);
  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      (setUser(response.data));
     
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

 
  const logout = () => {
    localStorage.removeItem('token');

    setToken(null);

  };

  return (
    <div className="App">
      <Router>
      <Navbar logout={logout} token={token}/>
   
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={token ? <Tasks token={token} /> : <Login setToken={setToken} />} />
          <Route path="/add" element={token ? <Addtask token={token} user={user}/> : <Login setToken={setToken} />} />
          <Route path="/login" element={!token ? <Login setToken={setToken} /> : <Home token={token} />} />
        <Route path="/register" element={!token ? <Register setToken={setToken} /> : <Home token={token} />} />
        </Routes>
  
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
