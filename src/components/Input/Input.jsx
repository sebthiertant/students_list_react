import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
	const { onClick, label } = props;
	const [saisie, setSaisie] = useState("");

	return (
		<div className="input_container">
			<form className="form" onSubmit={(e) => onClick(saisie, e)}>
				<label>{label}</label>
				<input
					type="text"
					placeholder="Input text |"
					onChange={(e) => setSaisie(e.target.value)}
				/>
			</form>
		</div>
	);
};

export default Input;
