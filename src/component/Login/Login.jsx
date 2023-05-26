import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { Button } from 'react-daisyui';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {

    const { logIn, googleUserCreate, githubUserCreate } = useContext(AuthContext)

    const navigate = useNavigate()

    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

    const [error, setError] = useState('')

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                navigate(from, {replace: true})
            })
            .catch(err=>{
                setError(err.message)
            })
    }

    const handleGoogleSingIn = () =>{
        googleUserCreate()
        .then(result=>{
            navigate(from)
        })
        .catch(err=>{
            setError(err.message)
        })
    }
    const handleGithubSingIn = () =>{
        githubUserCreate()
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(err=>{
            setError(err.message)
        })
    }
    

    return (
        <div className='container mx-auto  flex flex-col items-center'>
            <h1 className='text-5xl my-8'> Please Log in!!</h1>
            <div className='mb-8 w-1/2  border border-orange-200 rounded-lg flex flex-col items-center'>
            <form onSubmit={handleLogin} >
                <div>
                    <label htmlFor="email" className='block my-2 mt-4'>Email:</label>
                    <input type="email" name='email' required className='border-2 w-96 h-10 pl-2 border-orange-300 rounded-lg' />
                </div>
                <div>
                    <label htmlFor="password" className='block my-2'>Password:</label>
                    <input type="password" name='password' required className='border-2 w-96 h-10 pl-2 border-orange-300 rounded-lg' />
                </div>
                <p>{error}</p>
                <input type="submit" value="Submit" className='block btn mb-2 mt-5' />
                <p className=' mb-2'>Don't have an account? <Link to={'/register'} className='text-orange-500'>Register</Link></p>
            </form>
            <Button onClick={() => {handleGoogleSingIn()}} className='mb-4'> <FaGoogle className='mr-4'/> Sign in with Google</Button>
            <Button onClick={() => {handleGithubSingIn()}} className='mb-4'> <FaGithub className='mr-4'/> Sign in with Github</Button>
            </div>
            
        </div>
    );
};

export default Login;