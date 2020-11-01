import React from 'react';
import Todolist from './Todolist13.js';
import TodoMainList from './TodoMainList15.js';

class Todo extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: Todolist,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(id) {
		console.log('changed', id);
		this.setState((prev) => {
			const updatedtodo = prev.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			});
			return {
				todos: updatedtodo,
			};
		});
	}
	render() {
		const TodoItems = this.state.todos.map((item) => (
			<TodoMainList key={item.id} listitem={item} handleChange={this.handleChange} />
		));

		return <div>{TodoItems}</div>;
	}
}

export default Todo;
