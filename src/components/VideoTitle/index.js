import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-60 absolute px-16 w-screen aspect-video bg-gradient-to-r from-black bg-opacity-10'>
<h1 className='text-4xl font-bold text-white'>{title}</h1>
<p className='w-1/4 py-2 text-white'>{overview}</p>
<div className='flex gap-3'>
    <button className='bg-white rounded p-2 flex text-xl px-8 font-semibold'>Play</button>
    <button className='bg-white rounded p-2 flex text-xl px-8 font-semibold'>More Info</button>
</div>
    </div>
  )
}

export default VideoTitle