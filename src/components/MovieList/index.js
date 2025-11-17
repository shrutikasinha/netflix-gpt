
import React from 'react'
import MovieCards from '../MovieCards'

const MovieList = ({title, movies}) => {
  return (
    <div className='px-8 w-full max-w-fit'>
        <h1 className='font-bold text-white text-2xl py-4'>{title}</h1>
        <div className='flex gap-3 overflow-x-auto'>
        {movies?.map(movie => {
            return (
                <MovieCards key={movie.id} movie={movie}/>
             )
        })}
</div>
    </div>
  )
}

export default MovieList