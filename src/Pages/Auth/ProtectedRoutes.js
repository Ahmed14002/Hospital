import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Main from './../Main/Main';
import AccessDenied from './AccessDenied';
const ProtectedRoute = ({ roles = [] }) => {
  const { authToken, userRole } = useContext(AuthContext);

  if (!authToken) {
    return <Navigate to="/login" />;
  }

  if (roles.length > 0 && !roles.includes(userRole)) {
    return <Navigate to="/access-denied" />;
  }

  return <Main />;
};

export default ProtectedRoute;
