import React from "react";

const Header = ({ name, desc }) => {
	return (
		<header>
			<span>{name}</span>
			{desc}
		</header>
	);
};

export default Header;
