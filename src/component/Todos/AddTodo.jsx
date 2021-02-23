import React, { Component } from 'react'

export default class AddTodo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: 'ダミーxxx',
		}
	}

	handleChange = (e) => {
		const v = e.target.value
		this.setState({ title: v })
	}
	onSubmit = (e) => {
		e.preventDefault()
		this.setState({ title: '' })
		this.props.setTodo(this.state.title)
	}
	render() {
		// const v = this.state.title
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input
						type='text'
						value={this.state.title}
						onChange={this.handleChange}
					/>
					<button type='submit'>Button</button>
				</form>
			</div>
		)
	}
}
