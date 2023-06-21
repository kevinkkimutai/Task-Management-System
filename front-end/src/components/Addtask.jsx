import React, { useState } from 'react'
import task from '../assets/task.png'
import '../css/add.css'
import axios from 'axios';


function Addtask({token, user}) {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [due_date, setDue_date] = useState('');
  const [description, setDescription] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

// Form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/task',
        {
          name: name,
          description: description,
          due_date: due_date,
          status: 0,
          user_id: user.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTasks([...tasks, response.data]);
      setName('');
      setDescription('');
      setDue_date('');
      setStatus('INCOMPLETE');
      setIsSuccess(true);
      setIsError(false);
    } catch (error) {
      console.error(error);
      setIsSuccess(false);
      setIsError(true);
    }
  };
  

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
  {/* error section */}
      {isSuccess && (
                <div className=' mb-2 success' role='alert'>
                  <u>Task added successfully.</u>
                </div>
              )}
              {isError && (
                <div className='alert alert-danger mt-3' role='alert'>
                  An error occurred while adding the task.
                </div>
              )}
  {/* create tasks form */}
        <form className="login-form" onSubmit={handleSubmit}>
        <div className="col name">
    <label htmlFor="name" className="form-label text-start">Name:</label>
    <input type="text" className="form-control" id="name" 
    value={name} onChange={(e) => setName(e.target.value)} 
     placeholder='Task Name'/>
  </div>
  <div className="col name">
    <label htmlFor="name" className="form-label text-start">Due-Date:</label>
    <input type="date" className="form-control"
    value={due_date} onChange={(e) => setDue_date(e.target.value)}  
     id="name"/>
  </div>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
          value={description} onChange={(e) => setDescription(e.target.value)} 
           placeholder='Description'></textarea>
          <div className='pt-2'>
          <button type="submit" className="btn btn-outline-primary btn-sm">ADD TASK</button>
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
