import logo from './logo.svg'
import './App.css'
import Button from './stories/components/Button'
import Header from './Header'

function App() {
    return (
        <div className="App">
            <Header />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />π{' '}
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Button variant="primary">import by Story</Button>
            </header>
        </div>
    )
}

export default App
