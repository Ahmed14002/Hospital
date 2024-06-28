import React, { createContext, useState, useEffect } from 'react';

 export const AuthContext = createContext();
 export const AuthProvider = ({ children }) => {
   const [authToken, setAuthToken] = useState(null);
   const [userRole, setUserRole] = useState(null);

  useEffect(() => {
   const token = localStorage.getItem('authToken');
    const role = localStorage.getItem('role');
     setAuthToken(token);
     setUserRole(role);
   }, []);

   return (
     <AuthContext.Provider value={{ authToken, userRole, setAuthToken, setUserRole }}>
       {children}
     </AuthContext.Provider>
   );
 };
