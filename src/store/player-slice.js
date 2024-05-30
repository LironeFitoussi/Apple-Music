import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
    name: 'player',
    initialState: {
        isPlaying: false,
        volume: 79,
        currentTrack: {
            name: 'Times Up',
            artist: 'Coder Rocket Fuel',
            url: null,
            cover: './images/blank-track.svg',
        },
        isShuffle: false,
        repeatTimes: 0,
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
        },
        isShuffle(state) {
            state.isShuffle = !state.isShuffle;
        },
        repeatTimes(state) {
            state.repeatTimes = (state.repeatTimes + 1) % 3;
        },
    },
});

export const playerActions = playerSlice.actions;

export default playerSlice;