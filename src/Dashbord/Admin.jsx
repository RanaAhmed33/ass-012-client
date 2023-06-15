import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Admin = ({ children }) => {
    const { user, isLoading, admin } = useContext(AuthContext)
    let location = useLocation()

    if (isLoading) {
        return <div style={{ textAlign: 'center' }}><div class="spinner-border text-warning" role="status"></div></div>
    };

    if (user?.email && admin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />
};

