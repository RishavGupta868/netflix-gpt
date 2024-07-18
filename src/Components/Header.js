import { signOut } from 'firebase/auth';
import React from 'react'
import {  useSelector } from 'react-redux'
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
const user = useSelector((store)=>store.user);
const navigate = useNavigate();
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      
        navigate("/")
    
    }).catch((error) => {
      console.log(error)
    });
  }
  return (
    <div className=' bg-gradient-to-b from-black absolute z-10 w-full flex justify-between'>
      <img alt='netflix-logo' className='py-4 px-32 w-96 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'/>
    {user && <div className='flex justify-between text-center p-4'>
      <img alt='profile-icon' className='w-12 h-12' src={user?.photoURL}/>
      <button className='text-white font-bold pl-2' onClick={handleSignOut}>Sign Out</button>
    </div>}
    
    </div>
  )
}

export default Header
