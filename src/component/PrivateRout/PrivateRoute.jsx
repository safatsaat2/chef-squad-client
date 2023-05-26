import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    if (loader) {
        return <div className='h-screen flex justify-center items-center'><progress className="progress w-56 "></progress></div>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate to={'/login'} state={{from: location}}></Navigate>
    }

};

export default PrivateRoute;