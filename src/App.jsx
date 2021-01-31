import logo from './logo.svg'
import './App.css'
import Button from './stories/components/Button'
import Header from './Header'
import Btn from './Btn'

function App() {
  const onAction = () => {
    console.log('xxx')
  }
  const onAction2 = () => {
    console.log('yyy')
  }
  return (
    <div className="App">
      <Header title="Props String" />
      <header className="App-header">
        {/* <Btn color="tomato" text="Subit" /> */}
        <Btn
          color="teal"
          text="Button!"
          onClick={onAction}
        />
        <Btn onClick={onAction2} />
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
