import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos }) {
	return (
		<ul className="todo-list">
			{filteredTodos.map((todo) => (
				<Todo
					text={todo.text}
					todos={todos}
					key={todo.id}
					todo={todo}
					setTodos={setTodos}
				/>
			))}
		</ul>
	);
}

export default TodoList;
