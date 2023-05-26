import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from 'firebase/auth';


const Register = () => {

    const navigate = useNavigate()

    const { createUser, auth } = useContext(AuthContext);
    const [error, setError] = useState('')
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        console.log(auth.currentUser)
                    })
                form.reset()
                navigate('/')
                toast.success("Account Created")

            })
            .catch(err => {
                setError(err.message)
            })
    }

    return (
        <div className='container mx-auto  flex flex-col items-center'>
            <ToastContainer
            position='top-center'
            />
            <h1 className='text-5xl my-5 text-orange-500'> Register to have a blast!!</h1>
            <form onSubmit={handleRegister} className='my-8 w-1/2  border border-orange-200 rounded-lg flex flex-col items-center'>
                <div>
                    <label htmlFor="name" className='block my-2 mt-4'>Name:</label>
                    <input type="text" name='name' required className='border-2 w-96 h-10 pl-2 border-orange-300 rounded-lg' />
                </div>
                <div>
                    <label htmlFor="photo" className='block my-2 mt-4'>Photo Url:</label>
                    <input type="text" name='photo' required className='border-2 w-96 h-10 pl-2 border-orange-300 rounded-lg' />
                </div>
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
                <p className=' mb-4'>Already have an account? <Link to={'/register'} className='text-orange-500'>Log in</Link></p>
            </form>
        </div>
    );
};

export default Register;