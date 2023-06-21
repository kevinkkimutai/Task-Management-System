import React from 'react'
import task from '../assets/task.png'
function Home() {
  return (
    <div className='container pt-3 text-center'>
      <div className="row justify-content-evenly">
      <div className="col-5">
      This is a simple web application created using reactjs and bootstrap that allows users to manage their tasks effectively. With this application, users can create new tasks, mark them as complete,
       and delete tasks when they are no longer needed.
      <p>Backend Link: <a href="https://task-management-wm42.onrender.com">https://task-management-wm42.onrender.com</a></p>
    </div>
    <div className="col-5">
    <img className="img-fluid" src={task} alt="profile" />
    </div>
    
  </div>
    </div>
  )
}

export default Home
