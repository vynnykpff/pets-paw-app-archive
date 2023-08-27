import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
	userId: string;
}

const initialState: IUser = {
	userId: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserId: (state, action) => {
			state.userId = action.payload;
		},
	},
});

export const { setUserId } = userSlice.actions;
export default userSlice.reducer;
