import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    offcanvas: false,
    callModal: false,
  },
  reducers: {
    toggleOffcanvas: (state) => {
      state.offcanvas = !state.offcanvas;
    },
    toggleCallModal: (state) => {
      state.callModal = !state.callModal;
    },
  },
});

export const { toggleOffcanvas, toggleCallModal } = settingsSlice.actions;

export default settingsSlice.reducer;
