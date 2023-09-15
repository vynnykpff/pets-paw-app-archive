import { Theme } from "@/common/constants/theme";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = Theme.LIGHT;

// TODO: add preference user theme
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => action.payload,
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
