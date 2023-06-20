import {  Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
   
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<Tasks />} />
        </Routes>
  
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
