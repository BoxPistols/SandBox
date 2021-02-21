import React, { Component } from 'react'

export default class AddTodo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: 'test',
		}
	}

	render() {
		return (
			<div>
				<form className='fx m-auto' style={{ maxWidth: '800px' }}>
					<input
						className='form-control'
						type='text'
						placeholder='.form-control'
						value={this.state.title}
					/>
					<button type='submit' className='btn'>
						Add
					</button>
				</form>
			</div>
		)
	}
}
