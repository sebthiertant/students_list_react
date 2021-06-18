import React from "react";
import "./AddStudent.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

const AddStudent = (props) => {
	const {
		onClickLastName,
		onClickFirstName,
		onClickFormation,
		onRegisterButton,
	} = props;

	// faire trois hooks pour chaque input envoyés en props à l'input concernée

	return (
		<div className="addStudent_container">
			<h2>Ajouter étudiant</h2>
			<Input onClick={onClickLastName} label="Nom" />
			<Input onClick={onClickFirstName} label="Prénom" />
			<Input onClick={onClickFormation} label="Formation" />
			<Button content="Enregistrer" onClick={onRegisterButton} />
		</div>
	);
};

export default AddStudent;
