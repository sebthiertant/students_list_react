import "./App.css";
import React from "react";
import { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DeleteIcon from "@material-ui/icons/Delete";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Button from "./components/Button/Button";
import Student from "./components/Student/Student";
import AddStudent from "./components/AddStudent/AddStudent";
import "./App.css";

export default function App() {
	const [student, setStudent] = useState([]);
	const [creation, setCreation] = useState(false);
	const [tabValue, setTabValue] = useState(0);

	const toggleTab = (tabValue) => {
		if (tabValue === 0) {
			setTabValue(1);
		} else {
			setTabValue(0);
		}
	};
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

	const onRegisterButton = (lastName, firstName, formation) => {
		console.log("bouton enregistrer");
		setStudent([...student, { lastName, firstName, formation }]);
	};

	return (
		<div className="App">
			<h1>Liste d'étudiants</h1>
			<div className="students_list">
				<Paper square className="student_tab">
					<Tabs
						value={tabValue}
						onChange={() => toggleTab(tabValue)}
						indicatorColor="primary"
						textColor="primary"
						aria-label="icon tabs example"
					>
						<Tab icon={<DeleteIcon />} aria-label="delete" />
						<Tab icon={<HighlightOffIcon />} aria-label="time" />
					</Tabs>
				</Paper>
				<div className="student_line_container">
					<h2>Nom</h2>
					<h2>Prénom</h2>
					<h2>Formation</h2>
				</div>
				{student.map((student, index) => (
					<Student
						key={index}
						firstName={student.firstName}
						lastName={student.lastName}
						formation={student.formation}
						noteClick={noteClick}
						editClick={editClick}
						checkBoxClick={checkBoxClick}
					/>
				))}
			</div>
			<div className="add_student_section">
				<Button onClick={onAddButton} content="Ajouter" symbol="+"></Button>
			</div>

			{creation !== false ? (
				<AddStudent onRegisterButton={onRegisterButton} />
			) : undefined}
		</div>
	);
}
