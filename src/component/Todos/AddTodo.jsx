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
		alert(this.state.title)
	}
	render() {
		// const v = this.state.title
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input type='text' onChange={this.handleChange} />
					<button>Button</button>
				</form>
			</div>
		)
	}
}
