import "./Input.css";

const Input = (props) => {
	const { onChange, label } = props;

	return (
		<div className="input_container">
			<form className="form" onSubmit={(e) => onChange(e, e.target.value)}>
				<label>{label}</label>
				<input
					type="text"
					placeholder="Input text |"
					onChange={(e) => onChange(e, e.target.value)}
				/>
			</form>
		</div>
	);
};

export default Input;
