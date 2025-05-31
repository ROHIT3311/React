import { createSlice } from "@reduxjs/toolkit";
import reducer from "../todo/todoSlice";

const initialState = {
  theme: "white",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      if (state.theme === "black") {
        state.theme = "white";
      } else {
        state.theme = "black";
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
