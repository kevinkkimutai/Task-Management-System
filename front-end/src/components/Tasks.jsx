import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

function Tasks({ token, user }) {
  const [tasks, setTasks] = useState([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editTaskData, setEditTaskData] = useState(null);

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


  const handleDoneClick = async (taskId, currentStatus) => {
    try {
      // Determine the new status based on the current status
      const newStatus = currentStatus === 'COMPLETED' ? 'INCOMPLETE' : 'COMPLETED';
  
      // Make an API call to update the task status using axios or your preferred HTTP library
      // Example:
      await axios.put(
        `http://localhost:3000/task/${taskId}`,
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
  

  useEffect(() => {
    fetchTasks();
  }, []);



  const openEditModal = (task) => {
    setEditTaskData(task);
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
  };

  // edit task function
  const updateTask = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/task/${editTaskData.id}`, editTaskData, {
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

  const deleteTask = async (taskId) => {
    try {
      // Make an API call to delete the task using axios or your preferred HTTP library
      // Example:
      await axios.delete(`http://localhost:3000/task/${taskId}`, {
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

  return (
    <div className="container p-2 pt-2">
      <div className="heading">
        <h2>List of all Tasks</h2>
      </div>

      <div className="container text-center">
        <div className="row row-cols-2 row-cols-sm-4">
          {tasks.map((task) => (
            <div className="col-sm" key={task.id}>
              <div className="p-1">
                <div
                  className={`card ${task.status === 'COMPLETED' ? 'done-card' : ''}`}
                  style={{ height: '13.3rem', width: '17rem' }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{task.name}</h5>
                    <p className="card-subtitle mb-2 text-body-secondary">Due_Date: {task.due_date}</p>
                    <p className="card-text">{task.description}</p>

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
  );
}

export default Tasks;
