import React, { useState } from 'react'

function Tasks() {
    const [isDone, setIsDone] = useState(false);

  const handleDoneClick = () => {
    setIsDone(true);
    // Perform any other actions you need when the card is marked as done
  };
  return (
    <div className='containe p-2 pt-2'>
        <div className='heading'>
            <h2>List of all Tasks</h2>
        </div>

        <div className="containr text-center">
  <div className="row row-cols-2 row-cols-sm-4">
    <div className="col-sm">
          <div className="p-3">
          <div className={`card ${isDone ? 'done-card' : ''}`}>
  <div className="card-body">
    <h5 className="card-title text-start">Card title</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Due_Date: Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

      <button className="btn btn-outline-primary btn-sm" type="submit" onClick={handleDoneClick}>Done</button>

    <a href="/signup">
      <button className="btn btn-outline-success btn-sm ms-3" type="submit">Edit</button>
    </a>
    <a href="/signup">
      <button className="btn btn-outline-danger btn-sm ms-3" type="submit">Delete</button>
    </a>
    {isDone && (
      <span className="badge complete-text" style={{ transform: 'rotate(-30deg)' }}>
        Completed
      </span>
    )}
  </div>
</div>


    </div>
    </div>
    <div className="col-sm">
          <div className="p-3">
          <div className={`card ${isDone ? 'done-card' : ''}`}>
  <div className="card-body">
    <h5 className="card-title text-start">Card title</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Due_Date: Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

      <button className="btn btn-outline-primary btn-sm" type="submit" onClick={handleDoneClick}>Done</button>

    <a href="/signup">
      <button className="btn btn-outline-success btn-sm ms-3" type="submit">Edit</button>
    </a>
    <a href="/signup">
      <button className="btn btn-outline-danger btn-sm ms-3" type="submit">Delete</button>
    </a>
    {isDone && (
      <span className="badge complete-text" style={{ transform: 'rotate(-35deg)' }}>
        Completed
      </span>
    )}
  </div>
</div>
    </div>
    </div>
    <div className="col-sm">
          <div className="p-3">
     <div className="card">
  <div className="card-body">
    <h5 className="card-title text-start">Card title</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Due_Date: Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="card-link">Card link</a>
    <a href="/" className="card-link">Another link</a>
  </div>
</div>
    </div>
    </div>
    <div className="col-sm">
          <div className="p-3">
     <div className="card">
  <div className="card-body">
    <h5 className="card-title text-start">Card title</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Due_Date: Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="card-link">Card link</a>
    <a href="/" className="card-link">Another link</a>
  </div>
</div>
    </div>
    </div>
    <div className="col-sm">
          <div className="p-3">
     <div className="card">
  <div className="card-body">
    <h5 className="card-title text-start">Card title</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Due_Date: Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="card-link">Card link</a>
    <a href="/" className="card-link">Another link</a>
  </div>
</div>
    </div>
    </div>

    <div className="col-sm">
          <div className="p-3">
     <div className="card">
  <div className="card-body">
    <h5 className="card-title text-start">Card title</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Due_Date: Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="card-link">Card link</a>
    <a href="/" className="card-link">Another link</a>
  </div>
</div>
    </div>
    </div>
    <div className="col-sm">
          <div className="p-3">
     <div className="card">
  <div className="card-body">
    <h5 className="card-title text-start">Card title</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Due_Date: Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="card-link">Card link</a>
    <a href="/" className="card-link">Another link</a>
  </div>
</div>
    </div>
    </div>
    <div className="col-sm">
          <div className="p-3">
     <div className="card">
  <div className="card-body">
    <h5 className="card-title text-start">Card title</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Due_Date: Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="card-link">Card link</a>
    <a href="/" className="card-link">Another link</a>
  </div>
</div>
    </div>
    </div>
  </div>
</div>


    </div>


  )
}

export default Tasks
