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

// const getTask = {}
const Tasks = () => {
  return (
    <>
      <h2>Tasks</h2>
      {/* TODO: Retry to Map */}
      {tasks.map((task) => (
        <div style={{ display: 'inline-flex' }}>
          <p>{task.id}</p>
          <p>{task.text}</p>
          <p>{task.reminder}</p>
          <p>{task.day}</p>
        </div>
      ))}

      <ul>
        <li></li>
      </ul>
    </>
  )
}

// Tasks.defaultProps = {}
// Tasks.propTypes = {}

export default Tasks
