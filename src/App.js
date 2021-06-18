import "./App.css";
import React from "react";
import { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Student from "./components/Student/Student";
import AddStudent from "./components/AddStudent/AddStudent";

function App() {
	const [student, setStudent] = useState({});
	const [creation, setCreation] = useState(false);

	const onAddButton = () => {
		setCreation(!creation);
		console.log("bouton add");
	};

	const noteClick = () => {
		console.log("bouton note");
	};
	const editClick = () => {
		console.log("bouton éditer");
	};
	const checkBoxClick = () => {
		console.log("checkbox");
	};

	// addstudent component
	// onClickLastName onClickFirstName onClickFormation

	const onClickLastName = (saisie, event) => {
		event.preventDefault();
		console.log(saisie);
		console.log(event);
	};
	const onClickFirstName = (saisie, event) => {
		event.preventDefault();
		console.log(saisie);
		console.log(event);
	};
	const onClickFormation = (saisie, event) => {
		event.preventDefault();
		console.log(saisie);
		console.log(event);
	};

	const onRegisterButton = () => {
		console.log("bouton enregistrer");
	};

	return (
		<div className="App">
			<h1>Liste d'étudiants</h1>
			<div className="students_list">
				<div className="student_line_container">
					<h2>Nom</h2>
					<h2>Prénom</h2>
					<h2>Formation</h2>
				</div>
				<Student
					firstName="Sébastien"
					lastName="Thiertant"
					formation="CEFIM"
					noteClick={noteClick}
					editClick={editClick}
					checkBoxClick={checkBoxClick}
				/>
			</div>
			<div className="add_student_section">
				<Button onClick={onAddButton} content="Ajouter" symbol="+"></Button>
			</div>

			{creation === false ? (
				<AddStudent
					onClickLastName={onClickLastName}
					onClickFirstName={onClickFirstName}
					onClickFormation={onClickFormation}
					onRegisterButton={onRegisterButton}
				/>
			) : undefined}
		</div>
	);
}

export default App;
