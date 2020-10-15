import React, { useState, useEffect } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import db from "./firebase";

function App() {
	const [inputTodo, setInputTodo] = useState("");
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);

	useEffect(() => {
		db.collection("todos").onSnapshot((snapshot) => {
			setTodos(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					text: doc.data().text,
					completed: doc.data().completed,
				}))
			);
		});
	}, []);

	useEffect(() => {
		const filterHandler = () => {
			switch (filter) {
				case "completed":
					setFilteredTodos(todos.filter((todo) => todo.completed === true));
					break;
				case "uncompleted":
					setFilteredTodos(todos.filter((todo) => todo.completed === false));
					break;
				default:
					setFilteredTodos(todos);
					break;
			}
		};

		filterHandler();
	}, [todos, filter]);

	return (
		<div className="App">
			<Header name="Todo's" desc=" need doing!" />
			<Form
				todos={todos}
				setTodos={setTodos}
				inputTodo={inputTodo}
				setInputTodo={setInputTodo}
			/>
			<Filter setFilter={setFilter} />
			<TodoList
				todos={todos}
				setTodos={setTodos}
				filteredTodos={filteredTodos}
			/>
		</div>
	);
}

export default App;
