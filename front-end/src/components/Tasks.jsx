import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

function Tasks({ token, user }) {
  // State variables
  const [tasks, setTasks] = useState([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editTaskData, setEditTaskData] = useState(null);

  // Fetch tasks from the server
  const fetchTasks = async () => {
    try {
      const response = await axios.get(`https://task-management-wm42.onrender.com/users/${user.id}/tasks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Handle click on the "Done" button for a task
  const handleDoneClick = async (taskId, currentStatus) => {
    try {
      // Determine the new status based on the current status
      const newStatus = currentStatus === 'COMPLETED' ? 'INCOMPLETE' : 'COMPLETED';

      // Make an API call to update the task status using axios or your preferred HTTP library
      await axios.put(
        `https://task-management-wm42.onrender.com/task/${taskId}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Fetch updated tasks
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch tasks when the component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  // Open the edit modal for a task
  const openEditModal = (task) => {
    setEditTaskData(task);
    setEditModalVisible(true);
  };

  // Close the edit modal
  const closeEditModal = () => {
    setEditModalVisible(false);
  };

  // Update a task
  const updateTask = async () => {
    try {
      const response = await axios.put(`https://task-management-wm42.onrender.com/task/${editTaskData.id}`, editTaskData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Handle the response as needed
      console.log(response.data);
      // Close the edit modal
      closeEditModal();
      // Fetch updated tasks
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  // Delete a task
  const deleteTask = async (taskId) => {
    try {
      // Make an API call to delete the task using axios or your preferred HTTP library
      await axios.delete(`https://task-management-wm42.onrender.com/task/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Fetch updated tasks
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  // Filter tasks for "Due Today" section
  const dueTodayTasks = tasks.filter((task) => {
    const dueDate = new Date(task.due_date);
    const today = new Date();
    return dueDate.toDateString() === today.toDateString();
  });

  // Filter tasks for "On Track" section
  const notDueTodayTasks = tasks.filter((task) => {
    const dueDate = new Date(task.due_date);
    const today = new Date();
    return dueDate.toDateString() !== today.toDateString();
  });

  // Get today's date
  const today = new Date().toISOString().split('T')[0];

  // Filter tasks for "Past Due. Click to expand.

  const pastDueTasks = tasks.filter((task) => {
    const dueDate = new Date(task.due_date);
    return dueDate < new Date(today) && task.status !== 'COMPLETED';
  });
  

  return (
    <div className="container p-2 pt-2">
      <div className="row">
        {/* side bar section  */}
    <div className="col side">
    <div className="heading sidehead mb-3">
        <h2>Tasks</h2>
      </div>
      <div className="detail">
      <div className="heading">
        <h5>Due Today Tasks</h5>
      </div>
     <div className='list'>
     <ol className="lit">
     {dueTodayTasks.map((task) => (
                  <li key={task.id} className={`lss ${task.status === 'COMPLETED' ? 'done-list' : ''}`}>
                    {task.name}
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" type="button" onClick={() => deleteTask(task.id)} className="bi bi-trash trash me-3" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg>
                  </li>
                ))}
</ol>
     </div>
      </div>

      <div className="detail">
      <div className="heading">
        <h5>On Track Tasks</h5>
      </div>
     <div className='list'>
     <ol className="lit">
     {notDueTodayTasks.map((task) => (
                  <li key={task.id} className={`lss ${task.status === 'COMPLETED' ? 'done-list' : ''}`}>{task.name}
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" type="button" onClick={() => deleteTask(task.id)} className="bi bi-trash trash me-3" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg>
                  </li>
                ))}
</ol>
     </div>
      </div>

      <div className="detail past">
            <div className="heading">
              <h5>Past Due Tasks</h5>
            </div>
            <div className="list">
              <ol className="lit">
                {pastDueTasks.map((task) => (
                  <li key={task.id} className={`lss ${task.status === 'COMPLETED' ? 'done-list' : ''}`}>
                    {task.name}
                    <svg xmlns="http://www.w3.org/2000/svg"type="button" onClick={() => deleteTask(task.id)} width="16" height="15" fill="currentColor" className="bi bi-trash3-fill trash me-3" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg>
                  </li>
                ))}
              </ol>
            </div>
          </div>

    </div>

    {/* main container section */}
    <div className="col-9 mainlist">
    <div className="heading listhead">
        <h2>List of all Tasks</h2>
      </div>

      <div className="container text-center pt-5">
        <div className="row row-cols-2 row-cols-sm-3">
          {tasks.map((task) => (
            <div className="col-sm" key={task.id}>
              <div className="p-1">
                <div
                  className={`card ${task.status === 'COMPLETED' ? 'done-card' : ''}`}
                  style={{ height: '13rem', width: '17rem' }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{task.name}</h5>
                    <p className="card-subtitle mb-2 text-body-secondary">Due_Date: {task.due_date}</p>
                    <p className="card-text description" style={{ height: '5.2rem' }}>{task.description}</p>

                    <button className="btn btn-outline-primary btn-sm" type="submit" onClick={() => handleDoneClick(task.id)}>
                      Done
                    </button>

                    <button className="btn btn-outline-success btn-sm ms-3" type="button" onClick={() => openEditModal(task)}>
                      Edit
                    </button>

                    <button className="btn btn-outline-danger btn-sm ms-3" type="button" onClick={() => deleteTask(task.id)}>
                      Delete
                    </button>

                    {task.status === 'COMPLETED' && (
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

{/* modal section for the edit section */}
      <Modal show={editModalVisible} onHide={closeEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="login-box">
      <div className="form">
        <form className="login-form">
        <div className="col name">
    <label htmlFor="name" className="form-label text-start">Title:</label>
    <input
            type="text"
            value={editTaskData ? editTaskData.name : ''}
            onChange={(e) => setEditTaskData({ ...editTaskData, name: e.target.value })}
          />
  </div>
  <div className="col name">
    <label htmlFor="name" className="form-label text-start">Due-Date:</label>
    <input
            type="date"
            value={editTaskData ? editTaskData.due_date : ''}
            onChange={(e) => setEditTaskData({ ...editTaskData, due_date: e.target.value })}
          />
  </div>
  <div className="col name">
    <label htmlFor="desc" className="form-label text-start">Description:</label>
    <textarea
            type="date"
            value={editTaskData ? editTaskData.description : ''}
            onChange={(e) => setEditTaskData({ ...editTaskData, description: e.target.value })}
          ></textarea>
  </div>
        </form>
      </div>
  </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeEditModal}>
            Close
          </Button>
          <Button variant="primary" onClick={updateTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  </div>
      
    </div>
  );
}

export default Tasks;
