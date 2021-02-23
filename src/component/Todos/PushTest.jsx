import React, { Component } from 'react'

export default class PushTest extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: 'Dummy Tex',
		}
	}
	hendleClick = (e) => {
		// this.setState({ text: 'kkkkk' })
		e.preventDefault()
		this.props.setText(this.state.text)
	}

	render() {
		return (
			<div>
				<hr />
				<h1> Push Test</h1>
				<button onClick={this.hendleClick}>Button</button>
			</div>
		)
	}
}
