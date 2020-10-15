import React, { useState } from "react";
import db from "../firebase";

const Form = ({ inputTodo, setInputTodo }) => {
	const [isFocused, setIsFocused] = useState(false);

	const inputTodoHandler = (e) => {
		setInputTodo(e.target.value);
	};

	const submitTodoHandler = (e) => {
		e.preventDefault();

		db.collection("todos").add({
			text: inputTodo,
			completed: false,
		});

		setInputTodo("");
	};

	return (
		<form className={`todo-form ${isFocused ? "input-active" : ""}`}>
			<input
				type="text"
				placeholder="Add a ToDo"
				onChange={inputTodoHandler}
				value={inputTodo}
				onFocus={() => setIsFocused(!isFocused)}
				onBlur={() => setIsFocused(!isFocused)}
			></input>
			<button className="addTask" type="submit" onClick={submitTodoHandler}>
				<i className="fas fa-plus"></i>
			</button>
		</form>
	);
};

export default Form;
