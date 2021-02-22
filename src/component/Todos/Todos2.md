# Todo2

## Test

- Todos
    - Base File
    - state
        - todos: []
    - Include
        - List
        - AddTodo

- List
    - Array Controll
    - list = todos.map =>li >todo.id / todo.title
    - ul > li
- AddTodo
    - form method
    - state = title: 'xxx'
    - form
        -  onSubmit
            - e.preventDefault
            - alert(this.state.title)
        - input
          - value = this.state.title
          - onChange = this.handleChange
          - handleChange
            - titleVal=e.target.value
            - this.setState({ title: titleVal })