import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../../utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../../redux/slices/userSlice'
import { useNavigate } from 'react-router-dom'
import { PROFILE_PHOTO } from '../../utils/constants'
import { toggleNetflixGpt } from '../../redux/slices/netflixGptSlice'

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(store => store.user.user)
    const neflixtoggle = useSelector(store => store.netflixGpt)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              dispatch(addUser({user: user}))
              navigate('/browse')
            } else {
              dispatch(removeUser())
              navigate('/')
            }
      })
      //unsubscribe when component unmounts
      return () => unsubscribe()
    }, [])

  const handleSignOut = () => {
    signOut(auth).then(() => {
      }).catch((error) => {
        // An error happened.
      });
      
  }

  return (
    <header className='px-8 py-4 absolute bg-gradient-to-b from-black z-40 w-full flex justify-between'>
        <img className='w-44' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"  alt='logo' />
        <div className='flex gap-2'>
        <button className='bg-blue-700 text-white text-sm font-semibold h-fit py-3 p-2' onClick={() => dispatch(toggleNetflixGpt(!neflixtoggle?.netflixGpt))}>NetflixGPT</button>
        <div className='cursor-pointer' onClick={handleSignOut}>
        <img className='w-10 h-10' src={user?.user?.photoURL || PROFILE_PHOTO}  alt='userprofile' />
        </div>
        </div>
    </header>
  )
}

export default Header