import {  Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
   
      <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
  
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
