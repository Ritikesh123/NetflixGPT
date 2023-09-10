
import { useState } from 'react'
import Header from './Header'


const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
   
    const toggleSignUpForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    



  return (
    <div className=''>
        <Header />
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg'
            alt='backgound-logo' />
        </div>

        <form className='absolute p-12 bg-black w-3/12 my-32 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-sm'>
            <h1 className='text-3xl font-semibold mb-8 '>{!isSignInForm ? "Sign Up" : "Sign In"}</h1>
            {!isSignInForm && (
                 <input type='text' placeholder='Full Name' 
                 className='p-3 my-2 w-full rounded-md bg-zinc-800' />
            )}
            <input type='text' placeholder='Email or phone number' 
            className='p-3 my-2 w-full rounded-md bg-zinc-800' />
            <input type='text' placeholder='Password' className='p-3 my-2 w-full rounded-md bg-zinc-800' />
            <button className='py-3 my-8 text-center text-white bg-red-700 w-full rounded-md'>{!isSignInForm ? "Sign Up" : "Sign In"}</button>
            <p className='text-white cursor-pointer' onClick={toggleSignUpForm}>
               {!isSignInForm ? "Already a member? Sign In Now" : "New to Netflix? Sign up now."}</p>
        </form>
        
    </div>
  )
}

export default Login