import React, { Component } from 'react'

export class Todos extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: [],
			newTodo: '',
		}
	}

	render() {
		return <div className='todo'>Todo</div>
	}
}
