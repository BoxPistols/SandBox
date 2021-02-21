import React, { Component } from 'react'

export default class List extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const list = this.props.todos.map((todo) => {
			return (
				<li key={todo.id}>
					#{todo.id} / {todo.title}
				</li>
			)
		})
		return (
			<div>
				<p>{list}</p>
			</div>
		)
	}
}
