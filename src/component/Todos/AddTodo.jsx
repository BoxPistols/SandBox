import React, { Component } from 'react'

export default class AddTodo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: 'ダミーxxx',
		}
	}

	handleChange = (e) => {
		const v = e.target.value // get form value
		this.setState({ title: v }) // setState -> dummy
	}
	onSubmit = (e) => {
		e.preventDefault() // not submit
		this.setState({ title: '' }) // after submit empty
		this.props.setTodo(this.state.title) // submit時にstateのtitleを渡す 渡すProps = setTodo(タイトルの状態)
	}
	render() {
		// const v = this.state.title
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					{' '}
					{/* 送信メソッドに関数を与える */}
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
