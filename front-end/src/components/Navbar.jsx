import React from 'react'

function Navbar() {
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
          <li className="nav-item"><a className="nav-link" href="/design">Designs</a></li>
          <li className="nav-item"><a className="nav-link" href="/add">Add Design</a></li>
          <li className="nav-item ms-2">
          <div className="logins mt-1">
            <a href="/login">
        <button className="btn btn-outline-primary btn-sm" type="submit">Login</button>
        </a>
        <a href="/signup">
        <button className="btn btn-outline-success btn-sm ms-1" type="submit">SignUp</button>
        </a>
      </div>
            </li>
        </ul>
        
      </div>
      
    </div>
  </nav>
  )
}

export default Navbar
