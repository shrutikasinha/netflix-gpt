import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailer: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrendingVideo: (state,action) => {
            state.trailer = action.payload
        },
    }
})

export const {addNowPlayingMovies, addTrendingVideo} = movies.actions
export default movies.reducer 