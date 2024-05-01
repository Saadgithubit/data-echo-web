'use client'
import { userSignIn } from '@/config/firebase';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function SignInPage() {
    const [email , setemail] = useState()
    const [password , setpassword] = useState()
    const [isButtonClicked , setisButtonClicked] = useState(false)

    const signIn = async() => {
        setisButtonClicked(true)
        if(!email || !password){
            alert('Please Enter All Fields')
            setisButtonClicked(false)
            return
        }
        await userSignIn({email , password})
    }
    return (
        <div className='w-full h-screen p-3 flex sm:items-center sm:justify-center'>
            <div className="m-auto min-w-screen-sm md:w-1/2 lg:w-1/3 flex flex-col space-y-6 p-5 bg-white rounded-xl">
                <p className='text-2xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400'>
                Sign in Page
                </p>
                <TextField onChange={(e) => setemail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
                <TextField onChange={(e) => setpassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" />
                {!isButtonClicked?<button onClick={signIn} className="w-full p-3 bg-blue-300 rounded-xl text-white">Sign In</button>
                :<button className="w-full p-3 bg-blue-300 rounded-xl text-white">
                <img className='w-7 m-auto' src='https://i.gifer.com/ZZ5H.gif' />
                </button>}
                <p className='text-center'>Don't Have an account ? <a href='signup' className='cursor-pointer font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400'>Sign Up</a></p>
            </div>
        </div>
    )
}
