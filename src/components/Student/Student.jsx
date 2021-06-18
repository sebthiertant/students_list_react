import React from "react";
import Button from "../Button/Button";
import "./Student.css";

const Student = (props) => {
	const {
		lastName,
		firstName,
		formation,
		checkBoxClick,
		editClick,
		noteClick,
	} = props;

	return (
		<div className="student">
			<form>
				<input
					className="checkbox"
					type="checkbox"
					onClick={checkBoxClick}
				></input>
			</form>
			<p>{lastName}</p>
			<p>{firstName}</p>
			<p>{formation}</p>
			<Button onClick={noteClick} content="Note" symbol="+" />
			<Button onClick={editClick} content="Modifier" />
		</div>
	);
};

export default Student;
