import React, { useState } from 'react'
import '../css/auth.css'
import axios from 'axios';

function Register({setToken}) {
    const [username, setUsername] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`https://task-management-wm42.onrender.com/users/register`, {
        username,
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
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
          <div className="section pb-0 pt-0 text-center">
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-front">
                  <div className="center-wrap">
                    <div className="section text-center pt-3">
                      <h4 className="mb-2 pb-2 loghead">SignUp</h4>

                        <div className="form-group">
                          <input type="text" className="form-style"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                           placeholder="Username" />
                          <i className="input-icon uil uil-at"></i>
                        </div>

                    
                      <div className="form-group mt-2">
                          <input type="email" className="form-style" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                           placeholder="Email" />
                          <i className="input-icon uil uil-at"></i>
                        </div>

                      <div className="form-group mt-2">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-style"
                          placeholder="Password"
                        />
                        <i className="input-icon uil uil-lock-alt"></i>
                      </div>
                      <div className="btn button btn-primary mt-4" onClick={handleSubmit}>SignUp</div>
                      <p className="mb-0 mt-4 mb-3 text-center">
                        <a href="#/" className="link"
                          >Already have an account?</a>
                      </p>
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

export default Register
