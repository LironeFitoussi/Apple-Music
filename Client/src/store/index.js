// Code for the store configuration
import { configureStore } from "@reduxjs/toolkit";

import playerSlice from "./player-slice";

import userSlice from "./user-slice";

import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    player: playerSlice.reducer,
    user: userSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
