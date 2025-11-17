import React from 'react'
import GptMovies from '../GptMovies'
import GptSuggestions from '../GptSuggestions'
import { BG_IMG } from '../../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-30'>
        <img src={BG_IMG} alt='background'/>
        </div>
       <GptSuggestions />
       <GptMovies />
    </div>
  )
}

export default GptSearch