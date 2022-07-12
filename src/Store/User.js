import axios from "axios";
import create from "zustand";

export const useUserStore = create((set, get) => ({
	bears: 0,
	data: [],
	users: [],
	// funtions
	increaseBear: () =>
		set((state) => ({
			bears: state.bears + 1,
		})),

	setUsers: (newUsers) =>
		// setState
		set((state) => {
			return {
				users: [...state.users, {...newUsers}],
			};
		}),
	//
	// api calls
	fetchApi: async () => {
		try {
			const {data = []} = await axios.get("https://jsonplaceholder.typicode.com/todos");
			set(() => ({data}));
		} catch (e) {
			console.error(error);
		}
	},
}));
