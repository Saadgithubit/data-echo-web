'use client'
import TextField from '@mui/material/TextField';
import { userSignUp } from '@/config/firebase';
import { useState } from 'react';

export default function SignUpPage() {
    const [name , setname] = useState()
    const [email , setemail] = useState()
    const [password , setpassword] = useState()
    const [confirmpassword , setconfirmpassword] = useState()
    const [isButtonClicked , setisButtonClicked] = useState(false)

    const singUp = async() => {
        setisButtonClicked(true)
        if(!name || !email || !password || !confirmpassword){
            alert('Please Fill All Fields')
            setisButtonClicked(false)
            return
        }
        if(!email.includes('@')){
            alert('Please Enter Valid Email Address')
            setisButtonClicked(false)
            return
        }
        if(password !== confirmpassword){
            alert('Both Passwords Are Not Same')
            setisButtonClicked(false)
            return
        }
        await userSignUp({name , email , password , confirmpassword })
    }
    return (
        <div className="w-full h-screen p-3 flex justify-center items-center">
            <div className="lg:w-1/3 sm:w-1/2 min-w-screen-sm border-black flex flex-col space-y-6 p-5 bg-white rounded-xl">
                <p className='text-2xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400'>
                Sign Up Page
                </p>
                <TextField onChange={(e) => setname(e.target.value)} id="outlined-basic" label="Full Name" variant="outlined" />
                <TextField onChange={(e) => setemail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
                <TextField onChange={(e) => setpassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" />
                <TextField onChange={(e) => setconfirmpassword(e.target.value)} id="outlined-basic" label="Confirm Password" variant="outlined" />
                {!isButtonClicked?<button onClick={singUp} className="w-full p-3 bg-blue-300 rounded-xl text-white">Sign Up</button>
                :<button className="w-full p-3 bg-blue-300 rounded-xl text-white">
                <img className='w-7 m-auto' src='https://i.gifer.com/ZZ5H.gif' />
                </button>}
                <p className='text-center'>Already have an account ? <a href='signin' className='cursor-pointer font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400'>Sign In</a></p>
            </div>
        </div>
    )
}
