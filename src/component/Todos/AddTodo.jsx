import React, { Component } from 'react'

export default class AddTodo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: 'test',
		}
	}

	handleChange = (e) => {
		const title = e.target.value
		this.setState({ title: title })
	}
	handleSubmit = (e) => {
		e.preventDefault()
		alert(this.state.title)
	}
	render() {
		return (
			<div>
				<form
					onSubmit={this.handleSubmit}
					className='fx m-auto'
					style={{ maxWidth: '800px' }}
				>
					<input
						className='form-control'
						type='text'
						placeholder='.form-control'
						value={this.state.title}
						onChange={this.handleChange}
					/>
					<button type='submit' className='btn'>
						Add
					</button>
				</form>
			</div>
		)
	}
}
