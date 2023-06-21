import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tasks({token, user}) {
  const [tasks, setTasks] = useState([]);
  const fetchTasks = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users/${user.id}/tasks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchTasks();
  }, []);

  
  const handleDoneClick = () => {
    // Perform any other actions you need when the card is marked as done
  };

  return (
    <div className='container p-2 pt-2'>
      <div className='heading'>
        <h2>List of all Tasks</h2>
      </div>

      <div className="container text-center">
        <div className="row row-cols-2 row-cols-sm-4">
          {tasks.map((task) => (
            <div className="col-sm" key={task.id}>
              <div className="p-1">
                <div className={`card ${task.status === 'COMPLETED' ? 'done-card' : ''}`} style={{height: '13.3rem', width: '17rem'}}>
                  <div className="card-body">
                    <h5 className="card-title">{task.name}</h5>
                    <p className="card-subtitle mb-2 text-body-secondary">Due_Date: {task.due_date}</p>
                    <p className="card-text">{task.description}</p>

                    <button className="btn btn-outline-primary btn-sm" type="submit" onClick={handleDoneClick}>
                      Done
                    </button>

                    <a href="/signup">
                      <button className="btn btn-outline-success btn-sm ms-3" type="submit">
                        Edit
                      </button>
                    </a>
                    <a href="/signup">
                      <button className="btn btn-outline-danger btn-sm ms-3" type="submit">
                        Delete
                      </button>
                    </a>

                    {task.status === 'COMPLETED'  && (
                      <span className="badge complete-text" style={{ transform: 'rotate(-30deg)' }}>
                        Completed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tasks;
