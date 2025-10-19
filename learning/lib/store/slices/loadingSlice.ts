import { createSlice } from '@reduxjs/toolkit';

type LoadingState = {
    requests: number;      // active requests
    global: boolean;       // derived convenience flag
};

const initialState: LoadingState = { requests: 0, global: false };

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        beginRequest: (state) => {
            state.requests += 1;
            state.global = state.requests > 0;
        },
        endRequest: (state) => {
            state.requests = Math.max(0, state.requests - 1);
            state.global = state.requests > 0;
        },
        // Optional: force clear in edge cases
        resetLoading: (state) => {
            state.requests = 0;
            state.global = false;
        },
    },
});

export const { beginRequest, endRequest, resetLoading } = loadingSlice.actions;
export const reducer = loadingSlice.reducer;
