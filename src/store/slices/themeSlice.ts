import { createSlice } from "@reduxjs/toolkit";

const initialState = "light";

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme: (state, action) => action.payload,
	},
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
//
// // const getTheme = (): string => {
// // 	const theme = String(storage.getItem("theme"));
// // 	if (["light", "dark"].includes(theme)) return theme;
// //
// // 	const userMedia = window.matchMedia("(prefers-color-scheme: light)");
// // 	if (userMedia.matches) return "dark";
// //
// // 	return "light";
// // };
//
// // const initialState = getTheme();
//
// export const themeSlice = createSlice({
// 	name: "theme",
// 	initialState: {
// 		theme: "light",
// 	},
// 	reducers: {
// 		setTheme: (state, action) => {
// 			state.theme = action.payload;
// 		},
// 	},
// });
//
// export const { setTheme } = themeSlice.actions;
//
// export default themeSlice.reducer;
