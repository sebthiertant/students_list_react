import React from "react";
import "./Button.css";

const Button = (props) => {
	const { onClick, content, symbol } = props;
	return (
		<div className="button" onClick={onClick}>
			<span>{symbol}</span>
			<p>{content}</p>
		</div>
	);
};

export default Button;
