import React from "react";
import "./AddStudent.css";
import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

const AddStudent = (props) => {
	const { onRegisterButton } = props;

	const [lastName, setLastName] = useState("");
	const [firstName, setFirstName] = useState("");
	const [formation, setFormation] = useState("");

	const onChangeLastName = (event, value) => {
		event.preventDefault();
		setLastName(value);
	};

	const onChangeFirstName = (event, value) => {
		event.preventDefault();
		setFirstName(value);
	};
	const onChangeFormation = (event, value) => {
		event.preventDefault();
		setFormation(value);
	};
	return (
		<div className="addStudent_container">
			<h2>Ajouter étudiant</h2>
			<Input onChange={onChangeLastName} label="Nom" />
			<Input onChange={onChangeFirstName} label="Prénom" />
			<Input onChange={onChangeFormation} label="Formation" />
			<Button
				content="Enregistrer"
				onClick={() => onRegisterButton(lastName, firstName, formation)}
			/>
		</div>
	);
};

export default AddStudent;

// ton composant Input ne peux pas savoir / voir que le bouton au dessus de lui a été clické
// donc je ne ferais pas de hook dans le composant Input.
// Je ferais direct 2 props pour la valeur et le onChange
// et dans ton composant AddStudent j'ai 3 hooks que je passe au composant Input. Comme ça le bouton dans AddStudent a accès au valeur aussi
// fait add Student comme si tu utilisais des input natifs
// et après quand tu personnalise tes inputs tu remplaces et tu veras bien que tu n'as pas hook (modifié)
