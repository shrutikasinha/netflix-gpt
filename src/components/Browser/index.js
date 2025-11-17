import React, { useEffect } from 'react'
import Header from '../Header'
import { options } from '../../utils/constants'
import { useSelector } from 'react-redux'
import useFetchNowPlayingMovies from '../../hooks/useFetchNowPlayingMovies'
import MainContainer from '../MainContainer'
import SecondaryContainer from '../SecondaryContainer'
import GptSearch from '../GptSearch'

const Browse = () => {
    const movies = useFetchNowPlayingMovies()
    const netflixtoggle = useSelector(store => store.netflixGpt)
  return (
    <div>
        <Header />
        {netflixtoggle?.netflixGpt ? 
        <GptSearch /> :
        <>
        <MainContainer />
        <SecondaryContainer />
        </>
        }
    </div>
  )
}

export default Browse