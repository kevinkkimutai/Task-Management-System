import React from 'react'
import task from '../assets/task.png'
function Home() {
  return (
    <div className='container pt-3 text-center'>
      <div class="row justify-content-evenly">
      <div class="col-5">
      Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to our flexbox grid system.
      Plus, see how to use column classes to manage widths of non-grid elements.
    </div>
    <div class="col-5">
    <img className="img-fluid" src={task} alt="profile" />
    </div>
    
  </div>
    </div>
  )
}

export default Home
