import {useState, useEffect} from "react";
import "./App.css";
import Form from "./Pages/Form/Form";
import {useUserStore} from "./Store/User";

function App() {
	const {fetchApi} = useUserStore((state) => state);

	useEffect(() => {
		fetchApi();
	}, []);

	// console.log('data', data)

	return (
		<>
			<Form />
		</>
	);
}

export default App;
