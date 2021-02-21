import React from 'react'
import ReactDOM from 'react-dom'
import './App.scss'
// import App from './App';
import reportWebVitals from './reportWebVitals'
import { Todos } from './component/Todos/Todos'

ReactDOM.render(
	<React.StrictMode>
		<Todos />
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
