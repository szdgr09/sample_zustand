import * as React from "react";
import {DataGrid} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import {useUserStore} from "../../Store/User";

const columns = [{field: "id"}, {field: "firstName", width: 150}, {field: "lastName", width: 80}, {field: "age", width: 80, type: "number"}];

const Table = () => {
	const {users, setUsers} = useUserStore((state) => state);
	console.log("user from table", users);
	return <DataGrid rows={users.length ? users : []} columns={columns} />;
};

export default Table;
