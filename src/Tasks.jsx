// style
// import { FaWindowClose } from 'react-icons/fa'
import Task from './Task'

// map from Task
const Tasks = ({ list, onDelete }) => {
  return (
    <>
      {list.map((task) => (
        <Task
          key={task.id}
          obj={task}
          onDelete={onDelete}
        ></Task>
      ))}
    </>
  )
}

export default Tasks
