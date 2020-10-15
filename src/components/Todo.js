import React from "react";
import db from "../firebase";

function Todo({ text, todo }) {
	const deleteHandler = () => {
		db.collection("todos").doc(todo.id).delete();
	};

	const completeHandler = () => {
		db.collection("todos").doc(todo.id).set(
			{
				completed: !todo.completed,
			},
			{ merge: true }
		);
	};

	return (
		<li className={`todo-item ${todo.completed ? "completed" : ""}`}>
			<button className="item-done" onClick={completeHandler}>
				<i
					className={`${todo.completed ? "fas fa-check" : "far fa-circle"}`}
				></i>
			</button>
			{text}
			<button className="item-del" onClick={deleteHandler}>
				<i className="fas fa-trash"></i>
			</button>
			<div className="todo-btns"></div>
		</li>
	);
}

export default Todo;
