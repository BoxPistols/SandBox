import { FaWindowClose } from 'react-icons/fa'

// Base Style Comp
const Task = ({ obj, onDelete }) => {
  return (
    <div className="tasks fx-in fx-c">
      <p className="text">{obj.text}</p>
      <p className="text">{obj.date}</p>
      <p className="close">
        <FaWindowClose color="tomato" onClick={onDelete} />
      </p>
    </div>
  )
}

export default Task
