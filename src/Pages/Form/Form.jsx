import {Grid, TextField} from "@mui/material";
import React, {useReducer} from "react";
import * as constants from "./constants";
import {useUserStore} from "../../Store/User";
import Button from "@mui/material/Button";

const initialFormValues = {
	firstName: "",
	lastName: "",
	// email: "",
	age: "",
	// birthday: "",
};

const reducer = (curVals, newVals) => {
	return {
		...curVals,
		...newVals,
	};
};

const getRandomArbitrary = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Form = () => {
	const [formValues, setFormValues] = useReducer(reducer, initialFormValues);

	const {fields} = constants;

	// zustand states
	const {users, setUsers} = useUserStore((state) => state);

	const handleFormChange = (event) => {
		const {name, value} = event.target;

		setFormValues({[name]: value});
	};

	const handleSubmit = (event) => {
		console.log("submit");
		event.preventDefault();
		event.stopPropagation();

		setUsers({id: getRandomArbitrary(0, 9999999), ...formValues});
	};

	// console.log("formValues", formValues);
	console.log("users", users);

	return (
		<div style={{height: "100%", padding: "24px"}}>
			<form id="payroll-form" style={{display: "contents"}} onSubmit={handleSubmit}>
				<Grid container spacing={4}>
					{fields.map((field, index) => {
						const {name = "", label = "", xs = null, type = ""} = field;
						return (
							<Grid item xs={xs} key={`grid-${index}`}>
								<TextField name={name} type={type} label={label} fullWidth onChange={handleFormChange} value={formValues?.[name]} />
							</Grid>
						);
					})}
					<Grid item xs={12}>
						<Button type="submit" variant="contained">
							Submit
						</Button>
					</Grid>
				</Grid>
			</form>
		</div>
	);
};

export default Form;
