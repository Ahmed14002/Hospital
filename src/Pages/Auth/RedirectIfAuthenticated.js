import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const RedirectIfAuthenticated = ({ children }) => {
  const { authToken } = useContext(AuthContext);

  if (authToken) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default RedirectIfAuthenticated;
