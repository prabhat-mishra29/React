//form is created using 'react-hook-form'
//when you click on 'login' component it is submitted.

import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as storeLogin} from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authServices from '../Appwrite/auth'
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("") //to display errors

    //We will create a login method and pass it to handlesubmit.
    const login = async(data) => {
        setError("") //Jese hi form submit hoo sare error nikal doo.

        try {
            const session = await authServices.logIn(data)
            if (session) {
                //Agar session hai toh user log-in hai and user-data nikale.
                //current user lelo
                const userData = await authServices.getCurrentUser()

                //store update kardo
                if(userData) dispatch(storeLogin(userData));

                //Agar data agaya toh navigate kardo
                navigate("/") //navigate to home.
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>

        {/* Agar error hai toh show karo */}
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            {/* "handleSubmit" is an event and it requires a method. */}

            <div className='space-y-5'>

                {/* This "Input" is our component. */}
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {
                    //Javascript:--
                        //1st spread register :- takes an unique name and an object of options.
                    ...register("email", {
                        required: true,
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                            }
                        }  
                    )
                }
                />

                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {
                    //Javascript:--
                        //1st spread register :- takes an unique name and an object of options.
                    ...register("password", {
                        required: true,
                        }
                    )
                }
                />
                
                <Button
                text="Sign in"
                type="submit"
                className="w-full"
                ></Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login