import React from 'react'
import MovieList from '../MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)

  return (
    <div className='bg-black'>
        <div className='-mt-40 z-60 relative'>
        <MovieList title={'Popular Movies'} movies={movies.nowPlayingMovies}/>
        <MovieList title={'Trending'} movies={movies.nowPlayingMovies}/>
        <MovieList title={'Popular Movies'} movies={movies.nowPlayingMovies}/>
        <MovieList title={'Popular Movies'} movies={movies.nowPlayingMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer