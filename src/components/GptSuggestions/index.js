import React, { useRef } from 'react'
import { client } from '../../utils/openAI';
import { options } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { addTmdbMovies } from '../../redux/slices/moviesSlice';
import GptSuggestionsList from '../GptSuggestionsList';
import { addGptMovieResult } from '../../redux/slices/netflixGptSlice';

const GptSuggestions = () => {
    const dispatch = useDispatch()
    const inputRef = useRef(null)

    const searchImdbMovies = async (movie) => {
        const resp = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, options)
        const data = await resp.json()
        return data
    }

    const searchTxt =`Act like a movie recommendation system and suggest me 5 comma seperated in Bollywood comedy movies in related to query ${inputRef?.current?.value || ""} For example - Golmaal,All the best, Dhamaal, Dhol, 3 Idiots`

    const handleSearch = async (e) => {
        e.preventDefault()
        const response = "Golmaal,All the best,Dhamaal,Dhol,3 Idiots"
        const searchedMoviesDetails = response.split(",").map(movie => {
            return searchImdbMovies(movie)
        })
        const finalMovieList = await Promise.all(searchedMoviesDetails)
        dispatch(addGptMovieResult({movieSuggestion: finalMovieList.map(movies => movies.results), gptMovies: response}))
    
        // const response = await client.chat.completions.create({
        //     model: 'gpt-3.5-turbo',
        //     messages: [
        //       { role: 'user', content: searchTxt },
        //     ],
        //   });
    }

   return (
    <div className='pt-20'>
        <form className='flex gap-2 justify-center'>
            <input ref={inputRef} type='text' placeholder='Enter your search' className='bg-white text-black border rounded-sm p-2 w-1/2'/>
            <button className='bg-red-700 text-white rounded-sm p-2' onClick={e => handleSearch(e)}>Search</button>
        </form>
        <GptSuggestionsList />
    </div>
  )
}

export default GptSuggestions