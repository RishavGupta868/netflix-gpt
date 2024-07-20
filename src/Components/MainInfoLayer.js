import React, { useEffect } from 'react'
import { options } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addMovie } from '../Utils/Store/movieSlice';

const MainInfoLayer = () => {
    const dispatch = useDispatch();
    const movieInfoSelector = useSelector((store) => store.movieData)
    



    useEffect(()=>{
        const nowPlayingMovies = async()=>{
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            const json = await data.json()
            console.log(json.results)
            dispatch(addMovie(json.results))
        }
        nowPlayingMovies();
    },[]);
    

    
  return (
    <div className='pt-36 w-1/2'>
      <h1 className='font-bold text-4xl p-4'>{movieInfoSelector[0]?.title}</h1>
      <p className='w-2/3 p-4'>{movieInfoSelector[0]?.overview}</p>
      <div className='flex justify-between w-1/2 p-4'>
      <button> ► Play</button>
      <button> ⦿ More Info </button>
      </div>
    </div>
  )
}

export default MainInfoLayer
