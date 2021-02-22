import React, { Component } from 'react'

export default class List extends Component {
	constructor(props) {
		super(props)
	}
	/**
     * todo list dummy data
     * push this.props(map list) to Base
    */
	render() {
        const  list = this.props.todos.map(todo =>{
            return (<li>{todo.id}: {todo.title}</li>)
        })
        return (
			<ul>
				{ list }
			</ul>
		)
	}
}
