import React from 'react'

const MovieCards = ({movie}) => {
  return (
    <div className="min-w-[150px]">
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.original_title} className="h-48 object-cover" />
    </div>
  )
}

export default MovieCards