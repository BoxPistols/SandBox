import { FaWindowClose } from 'react-icons/fa'

const Task = ({ taskObj }) => {
  return (
    <div className="tasks fx-in fx-c">
      <p className="tex">{taskObj.text}</p>
      <p className="day">{taskObj.day}</p>
      <p className="close">
        <FaWindowClose color="tomato" />
      </p>
    </div>
  )
}

export default Task
