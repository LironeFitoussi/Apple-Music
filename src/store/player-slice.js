import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
    name: 'player',
    initialState: {
        isPlaying: false,
        volume: 50,
        currentTrack: null,
    },
    reducers: {
        togglePlay(state) {
            state.isPlaying = !state.isPlaying;
        },
        setVolume(state, action) {
            state.volume = action.payload;
        },
        currentTrack(state, action) {
            state.currentTrack = action.payload;
        }
    },
});

export const playerActions = playerSlice.actions;

export default playerSlice;