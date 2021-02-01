import { FaWindowClose } from 'react-icons/fa'

// Base Style Comp
const Task = ({ obj, clickId, nothing }) => {
  return (
    <div className="tasks fx-in fx-c">
      <p className="text">{obj.text}</p>
      <p className="text">{obj.day}</p>
      <p className="close">
        <FaWindowClose
          color="tomato"
          onClick={() => clickId(obj.id)} // include setting -> Click: ArrayObj(value)
        />
      </p>
    </div>
  )
}

export default Task
