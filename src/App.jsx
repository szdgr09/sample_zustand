import {useState, useEffect} from "react";
import "./App.css";
import Form from "./Pages/Form/Form";
import {useUserStore} from "./Store/User";
import Table from "./Pages/Table/Table";
import {Button} from "@mui/material";

function App() {
	const {fetchApi} = useUserStore((state) => state);
	const [openForm, setOpenForm] = useState(false);
	useEffect(() => {
		fetchApi();
	}, []);

	return (
		<>
			{/* <div>test</div> */}
			<Button onClick={() => setOpenForm(!openForm)} variant="contained">
				{openForm ? "Open Table" : "Open Form"}
			</Button>

			{openForm ? <Form /> : <Table />}
		</>
	);
}

export default App;
