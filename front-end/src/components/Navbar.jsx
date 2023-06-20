import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({token, logout, user}) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div className="container-fluid ">
      <a className="navbar-brand" href="/">
        <span><b>TASKz</b></span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
          className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
          <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="/task">Tasks</a></li>
          <li className="nav-item"><a className="nav-link" href="/add">AddTasks</a></li>
          <li className="nav-item ms-2">
      
          <div className="d-flex">
        {token ?(
        <>
         <ul className="nav nav-pills nav-fill">
  <li className="nav-item">
  {user && (
    <a className="nav-link me-3" href="#/"> {user} </a>
  )}
  </li>
  <li className="nav-item pt-1">
      <button className="btn btn-outline-danger btn-sm"  onClick={logout}>Logout</button>
      </li>
      </ul>
        </>
        ) : (
<>
  <div className="nav-item pt-1">
  <Link to="/login"><button className="btn btn-outline-primary btn-sm " href="login" type="submit">Login</button></Link> 
  <Link to="/register"><button className="btn btn-outline-success btn-sm ms-2" href="register" type="submit">Signup</button></Link> 
  </div>
</>
        )}
        </div>
            </li>
        </ul>
        
      </div>
      
    </div>
  </nav>
  )
}

export default Navbar
