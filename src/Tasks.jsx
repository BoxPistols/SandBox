// import React from 'react'
// import PropTypes from 'prop-types'

const tasks = [
  {
    id: 1,
    text: 'text Lorem, ipsum 1-task',
    day: '2021 1 31',
    reminder: true,
  },
  {
    id: 2,
    text: 'text Lorem, ipsum 2-task',
    day: '2021 2 31',
    reminder: true,
  },
  {
    id: 3,
    text: 'text Lorem, ipsum 3-task',
    day: '2021 3 31',
    reminder: false,
  },
]

// map to tasksX
const Tasks = () =>
  tasks.map((task) => (
    <div key={task.id} className="tasks fx-in fx-ai-c">
      <p>{task.text}</p>
      <p className="day">{task.day}</p>
    </div>
  ))

export default Tasks
