import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <h2 className='text-orange-500 text-9xl font-bold'>404</h2>
            <p className='text-orange-500 text-3xl'>Page Not Found</p>
            <Link to={'/'} className='underline text-orange-500'>Go to home</Link>
        </div>
    );
};

export default NotFound;