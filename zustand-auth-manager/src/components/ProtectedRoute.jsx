import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';



const ProtectedRoute = ({children}:{children:JSX.Elements}) => { // it takes children and children should be in jsx format
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute

