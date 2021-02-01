const Task = ({ taskObj }) => {
  // map to tasks
  return (
    <>
      <div className="tasks fx-in fx-ai-c">
        <p>{taskObj.text}</p>
        <p className="day">{taskObj.day}</p>
      </div>
    </>
  )
}

export default Task
