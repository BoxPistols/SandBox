import React, { Component } from 'react'

const Todo_Params = [
    {   title: "AAAA"
    }
]
function Todo(props) {
	return <li>in ToDo</li>
}

// propsオブジェクトにデータ格納
function TodoList(props) {
    const todoList = props.todos.map((todo, index) =>{
    return(
        <Todo key={index}/>
        )
    })
    return (
        <div className="fx fx-col ">
            <h3>List</h3>
            <ul className="fx fx-col">{todoList}</ul>
        </div>
    )
}

function TodoForm(props) {
	return (
		<div className='container'>
			<div className='row fx fx-col'>
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
			todos: Todo_Params,
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
                        <TodoList
                        todos={this.state.todos}
                        />
					</div>
				</div>
			</div>
		)
	}
}
