# Todos

## Stateを初期化

- Appが持つState構造
    - todos: Todoリストを格納する
    - newTodo: 新しくTodoを作成するときにその入力値を格納する

```jsx
export class Todos extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: [],
			newTodo: '',
		}
	}

	render() {
		return <div className='todo'>Todo</div>
	}
}
```

## TodoFormコンポーネントの作成

- フォーム用のコンポーネント
- Stateレスなコンポーネント

```jsx
function TodoForm(params) {
	return (
        <form>
            <label htmlFor='label'>
                Add New ToDo
                <input type='text' className='form-control' />
            </label>
            <button className='btn btn-success'>Add New</button>
        </form>
	)
}
```

## TodoListコンポーネントの作成

```jsx
function TodoList(params) {
	retuen(<ul>ToDo List</ul>)
}
```

## 配列データの引数設置

```jsx
export class Todos extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: TODO_PARAMS, // <- Add
			newTodo: '',
		}
	}
```