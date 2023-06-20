import React from 'react'
import '../css/auth.css'

function Register() {
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
                          <input type="text" className="form-style" placeholder="Firstname" />
                          <i className="input-icon uil uil-at"></i>
                        </div>

                        <div className="form-group mt-2">
                          <input type="text" className="form-style"  placeholder="Lastname" />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                    
                      <div className="form-group mt-2">
                          <input type="email" className="form-style" v-model="email" placeholder="Email" />
                          <i className="input-icon uil uil-at"></i>
                        </div>

                      <div className="form-group mt-2">
                        <input
                          type="password"
                          v-model="password"
                          className="form-style"
                          placeholder="Password"
                        />
                        <i className="input-icon uil uil-lock-alt"></i>
                      </div>
                      <div className="btn button btn-primary mt-4">SignUp</div>
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
