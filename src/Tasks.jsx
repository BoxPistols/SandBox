// import { useState } from 'react'

// function
const Tasks = ({ tasks }) => {
  // map to tasks
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className="tasks fx-in fx-ai-c">
          <p>{task.text}</p>
          <p className="day">{task.day}</p>
        </div>
      ))}
    </>
  )
}
export default Tasks
