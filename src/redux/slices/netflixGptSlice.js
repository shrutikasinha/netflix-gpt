import { createSlice } from "@reduxjs/toolkit";

const NetflixGptSlice = createSlice({
    name: 'neflixGpt',
    initialState: {
        netflixGpt: false,
        movieSuggestion: null,
        gptMovies: null
        
    },
    reducers: {
        toggleNetflixGpt: (state,action) => {
            state.netflixGpt = action.payload
        },
        addGptMovieResult: (state,action) => {
            const {movieSuggestion,gptMovies} = action.payload
            state.movieSuggestion = movieSuggestion
            state.gptMovies = gptMovies
        }
    }
})

export const {toggleNetflixGpt, addGptMovieResult} = NetflixGptSlice.actions
export default NetflixGptSlice.reducer