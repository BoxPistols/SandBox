import React, { Component } from 'react'
import List from './List'

export class Todos extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: [
				{ id: 0, title: 'title-1' },
				{ id: 1, title: 'title-2' },
				{ id: 2, title: 'title-3' },
			],
			nextId: 0,
		}
	}
	render() {
		return (
			<div className='Todos'>
				<h1>Todo App</h1>
				<List todos={this.state.todos} />
			</div>
		)
	}
}
