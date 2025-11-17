import React, { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../redux/slices/moviesSlice'

const useFetchNowPlayingMovies = () => {

    const dispatch = useDispatch()

    const fetchNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        const resp = await data.json()
        dispatch(addNowPlayingMovies(resp.results))
    }
      useEffect(() => {
        fetchNowPlayingMovies()
      })

}

export default useFetchNowPlayingMovies