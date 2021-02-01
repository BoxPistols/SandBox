// style
// import { FaWindowClose } from 'react-icons/fa'
import Task from './Task'

// map from Task
const Tasks = ({ list, clickId, nothing }) => {
  return (
    <>
      {list.map((task) => (
        <Task
          key={task.id}
          obj={task}
          clickId={clickId} // Relay on Task Click Work
        ></Task>
      ))}
    </>
  )
}

export default Tasks
