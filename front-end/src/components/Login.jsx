import React, { useState } from 'react'
import '../css/auth.css'
import axios from 'axios';

function Login({setToken}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post(`http://localhost:3000/users/login`, {
          email,
          password,
        });
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        
      } catch (error) {
        console.error(error);
      }
    };
  return (
    <div className="section">
    <div className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-12 text-center align-self-center">
          <div className="section text-center">
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-front">
                  <div className="center-wrap">
                    <div className="section text-center">
                    <form
                        onSubmit={handleSubmit}
                        className="section text-center"
                      >
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-style"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <i className="input-icon bi bi-person-fill-add"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            className="form-style"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <i className=" input-icon bi bi-key-fill"></i>
                        </div>
                        <button
                          type="submit"
                          className="btn1 mt-4 btn btn-outline-info"
                        >
                          Login
                        </button>
                        <p className="mb-0 mt-4 text-center">
                          <a href="/resetpassword" className="link">
                            Forgot your password?
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
