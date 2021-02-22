import React, { Component } from 'react'
import AddTodo from './AddTodo'
import List from './List'
import css from './Todos.module.scss'

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
	/**
     * todo list dummy data
     * add this.state from List ( map obj method)
    */
	render() {
		return (
			<div className={css.Todos}>
				<h1>Todos App</h1>
				<List todos={this.state.todos} />
				<AddTodo />
			</div>
		)
	}
}
