import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Teacher = ({ children }) => {
    const { user, isLoading, teacher } = useContext(AuthContext)
    let location = useLocation()

    if (isLoading) {
        return <div style={{ textAlign: 'center' }}><div class="spinner-border text-warning" role="status"></div></div>
    };

    if (user?.email && teacher) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />
};

export default Teacher;