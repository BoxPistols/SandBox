import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import Button from './stories/components/Button'
import Header from './Header'
// import Btn from './Btn'
import Tasks from './Tasks'

function App() {
  // array function useState([...])
  const [tasksList, setTasks] = useState([
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
  ])

  // Delete Self List // set not self all component = self delete
  const deleteTask = (id) => {
    // set id(taskList)
    setTasks(tasksList.filter((t) => t.id !== id)) // useState(ArrayVal.filter(...self))
  }
  return (
    <div className="App">
      <Header title="Props String" />
      <header className="App-header">
        {/*
         * tasks: propsName
         * tasksList: useState Array Object&FunctoinName
         */}
        {/* onClickID(id) <- obj.id from Task */}
        {tasksList.length > 0 ? (
          <Tasks list={tasksList} clickId={deleteTask} />
        ) : (
          <h3>Do Append Task!</h3>
        )}
        {/* <Btn color="tomato" text="Subit" /> */}
        {/* <Btn color="teal" text="Button!" /> */}
        {/* <Btn onClick={onAction2} /> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>
          <code>π</code>
        </h2>
        <Button variant="primary">import by Story</Button>
      </header>
    </div>
  )
}

export default App
