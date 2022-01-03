import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  isAuthenticated: boolean;
  isMuted: boolean;
}

const initialState: CounterState = {
  isAuthenticated: false,
  isMuted: true,
};

export const counterSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setAuthenticated: (state) => {
      state.isAuthenticated = true;
    },
    turnOnSound: (state) => {
      state.isMuted = false;
    },
    turnOffSound: (state) => {
      state.isMuted = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthenticated, turnOffSound, turnOnSound } = counterSlice.actions;

export default counterSlice.reducer;
