import React from "react";

function Filter({ setFilter }) {
	const filterHandler = (e) => {
		setFilter(e.target.value);
	};

	return (
		<div className="filter">
			<select name="filter" onChange={filterHandler}>
				<option value="all">All</option>
				<option value="completed">Completed</option>
				<option value="uncompleted">Uncompleted</option>
			</select>
		</div>
	);
}

export default Filter;
