import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../MovieList'

const GptSuggestionsList = () => {
    const {gptMovies, movieSuggestion} = useSelector(store => store.netflixGpt)
    console.log("print both", gptMovies, movieSuggestion)
    if(!gptMovies) return null
  return (
    <div className='bg-black'>
        {gptMovies.split(",").map((movie, i) => {
            return <MovieList key={movie} title={movie} movies={movieSuggestion[i]}/>
        })}
       

    </div>
  )
}

export default GptSuggestionsList