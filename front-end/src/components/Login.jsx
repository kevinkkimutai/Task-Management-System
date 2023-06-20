import React from 'react'
import '../css/auth.css'

function Login() {
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
                      <h4 className="mb-2 pb-3 loghead">Log In</h4>
                      <div className="form-group">
                        <input type="email" className="form-style" placeholder="Email" />
                        <i className="input-icon uil uil-at"></i>
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="password"
                          className="form-style"
                          placeholder="Password"
                        />
                        <i className="input-icon uil uil-lock-alt"></i>
                      </div>
                      <div className="btn button btn-primary mt-4">Login</div>
                      <p className="mb-0 mt-4 text-center">
                        <a href="https://www.web-leb.com/code" className="link"
                          >Forgot your password?</a>
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

export default Login
