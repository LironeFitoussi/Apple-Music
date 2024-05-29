import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        token: null,
    },
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.token = action.payload;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.token = null;
        },
    },
});

export const userActions = userSlice.actions;

export default userSlice;