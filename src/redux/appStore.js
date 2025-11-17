import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/userSlice'
import nowPlayingMovies from './slices/moviesSlice'
import NetflixGptSlice from "./slices/netflixGptSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: nowPlayingMovies,
        netflixGpt: NetflixGptSlice
    }
})

export default appStore