import React, { Component } from 'react'

function Todo(params) {
	return <li>ToDo</li>
}

function TodoList(params) {
	return (
		<ul>
			<Todo />
		</ul>
	)
}

function TodoForm(params) {
	return (
		<div className='container'>
			<div className='row'>
				<TodoList />
				<form>
					<label htmlFor='label'>
						Add New ToDo
						<input type='text' className='form-control' />
					</label>
					<button className='btn btn-success'>Add New</button>
				</form>
			</div>
		</div>
	)
}

export class Todos extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: [],
			newTodo: '',
		}
	}

	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='todo'>
						<h1>Todo App</h1>
						<TodoForm />
					</div>
				</div>
			</div>
		)
	}
}
