import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
  
  const MovieData = useSelector((store)=> store.movieData)
  
  
  
  
  return (
    <div className=' bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title="Now Playing Movies" data={MovieData.nowPlayingMovies}/>
      <MovieList title="Popular Movies" data={MovieData.popularMovies}/>
      <MovieList title="Top Rated Movies" data={MovieData.topRatedMovies}/>
      <MovieList title="Upcoming Movies" data={MovieData.upcomingMovies}/>
      {
        /**
        movielist component * 5-6 and 
        inside movielist one movie component
        */
      }
      </div>
    </div>
  )
}

export default SecondaryContainer
