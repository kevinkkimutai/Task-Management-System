import React from 'react'
import task from '../assets/task.png'
import '../css/add.css'

function Addtask() {
  return (
    <div className='container pt-3 text-center'>
      <div className="row justify-content-evenly">
        <h2>
            Add Task
        </h2>
      <div className="col-5">
    <img className="img-fluid" src={task} alt="profile" />
    </div>
      <div className="col-5">
      <div className="login-box">
      <div className="form">
        <form className="login-form">
        <div className="col name">
    <label for="title" className="form-label text-start">Title:</label>
    <input type="text" className="form-control" id="title" placeholder='Task Title'/>
  </div>
  <div className="col name">
    <label for="title" className="form-label text-start">Due-Date:</label>
    <input type="date" className="form-control" id="title"/>
  </div>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Description'></textarea>
          <div className='pt-2'>
          <button type="button" className="btn btn-outline-primary btn-sm">ADD TASK</button>
          </div>
          
        </form>
      </div>
  </div>
    </div>
    
    
  </div>
    </div>
  )
}

export default Addtask
