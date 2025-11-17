import React, { useRef, useState } from 'react'
import { validateLoginForm } from '../../utils/validateLoginForm'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/slices/userSlice';
import Header from '../Header';
import { PROFILE_PHOTO } from '../../utils/constants';

const Login = () => {
    const dispatch = useDispatch()
    const [isSignUp, setSignUp] = useState(false)
    const [error, setError] = useState({})
    const email = useRef(null)
    const name = useRef(null)
    const password = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!Object.values(error).length || Object.values(error).includes('')){
            if(isSignUp) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    updateProfile(userCredential.user, {
        displayName: "Shrutika Sinha", photoURL: PROFILE_PHOTO
      }).then(() => {
        dispatch(addUser({user: auth.currentUser}))
      }).catch((error) => {
        // An error occurred
        // ...
      });
      
  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(prev => ({
        ...prev,
        errorAuth: errorMessage
    }))
  });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    
  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(prev => ({
        ...prev,
        errorAuth: errorMessage
    }))

  });
        }
    }
    }

    const toggleSignIn = () => {
        setSignUp(!isSignUp)
    }

    const handleForm = (e) => {
        const val = e.target.value, name = e.target.name
        const validateVal = validateLoginForm(name, val)
        if(validateVal){
            setError((prev) => ({
                ...prev,
                [name]: validateVal
            }))
        }
    }

    const handleInput = (e) => {
        const name = e.target.name
        setError(prev => ({
            ...prev,
            [name]: ""
        }))
    }

  return (
    <div>
            <Header />

        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/e94073b0-a056-402f-9015-16cb1e7e45c2/web/AE-en-20251110-TRIFECTA-perspective_c78e6526-49d7-470e-8630-6a69b4d6e039_large.jpg' alt='bg' />
        </div>
        <form className='absolute ml-[50%] mt-[20%] -translate-x-2/4 -translate-y-1/4 grid gap-4 bg-black p-8 w-1/5 rounded-lg bg-opacity-80'>
        <h3 className='font-bold text-white text-xl'>{isSignUp ? "Sign Up" : "Sign In"}</h3>
        {isSignUp && <div>
            <input ref={name} type='name' name='Name' className='bg-gray-600 bg-opacity-35 px-2 py-2 w-full text-white text-xs rounded-lg' placeholder='Enter Name' onBlur={e => handleForm(e)} onChange={e => handleInput(e)} />
            {error.Name && <text className='text-red-700 text-xs'>{error.Name}</text>}
            </div>}           
         <input ref={email} type='email' name='Email' className={`bg-gray-600 bg-opacity-35 px-2 py-2 w-full text-white text-xs rounded-lg border ${error.name === "email" ? 'border-red-700' : ''}`} placeholder='Enter Email' onBlur={e => handleForm(e)} onChange={e => handleInput(e)}/>
        {error.Email && <text className='text-red-700 text-xs'>{error.Email}</text>}            
        <input ref={password} type='password' name='Password' className='bg-gray-600 bg-opacity-35 px-2 py-2 w-full text-white text-xs rounded-lg' placeholder='Password' onBlur={e => handleForm(e)} onChange={e => handleInput(e)}/>
        {error.Password && <text className='text-red-700 text-xs'>{error.Password}</text>}            
            {error.errorAuth && <p className='text-red-700 text-xs'>{error.errorAuth}</p>}
            <button className='bg-red-700 text-white px-2 py-2 mt-2 text-sm rounded-lg' onClick={e => handleSubmit(e)}>{isSignUp ? "Sign Up" : "Sign In"}</button>
            <p className='text-white text-xs cursor-pointer' onClick={toggleSignIn}>{isSignUp ? "New User? Sign up now." : "Already registered? Sign in now."}</p>
        </form>
    </div>
  )
}

export default Login