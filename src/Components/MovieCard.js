import React from 'react'
import { POSTER_PATH } from '../Utils/constants'

const MovieCard = ({poster}) => {
    
  return (
    <div className='pr-4'>
      <img className='w-48 max-w-none' alt='poster_image' src={POSTER_PATH+poster}/>
      
    </div>
  )
}

export default MovieCard
