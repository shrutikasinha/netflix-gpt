import React from 'react'
import useTrendingVideo from '../../hooks/useTrendingVideo'
import { useSelector } from 'react-redux'

const VideoBackground = ({youtubeId}) => {
    useTrendingVideo(youtubeId)

    const trailer = useSelector(store => store.movies?.trailer)

    return (
    <div>
        <iframe
  src={`https://www.youtube.com/embed/${trailer?.trailer?.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1`}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  className='w-screen aspect-video'
></iframe>

    </div>
  )
}

export default VideoBackground