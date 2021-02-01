import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Button from './stories/components/Button'
import Header from './Header'
import Btn from './Btn'
import Tasks from './Tasks'

function App() {
  const onAction = () => {
    console.log('xxx')
  }
  // const onAction2 = () => {
  //   console.log('yyy')
  // }
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

  const delTask = (id) => {
    console.log('del', id)
  }

  return (
    <div className="App">
      <Header title="Props String" />
      <header className="App-header">
        {/*
         * tasks: propsName
         * tasksList: useState Array Object&FunctoinName
         */}
        <Tasks list={tasksList} onDelete={delTask} />
        {/* <Btn color="tomato" text="Subit" /> */}
        <Btn color="teal" text="Button!" />
        {/* <Btn onClick={onAction2} /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>π</code>
        </p>
        <Button variant="primary">import by Story</Button>
      </header>
    </div>
  )
}

export default App
