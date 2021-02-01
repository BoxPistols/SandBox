// style
// import { FaWindowClose } from 'react-icons/fa'
import Task from './Task'

// map from Task
const Tasks = ({ list }) => {
  return (
    <>
      {list.map((task) => (
        <Task key={task.id} obj={task}></Task>
      ))}
    </>
  )
}

export default Tasks
