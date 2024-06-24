import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export  function ProtectedSettings() {
 const{token} = AuthContext();
 const getRole = () => {
  if (typeof window !== 'undefined' && localStorage) {
   return localStorage.getItem('role');
  }
  return null; 
 };
 
 const role = getRole();

 
 if (token && role === 'MANGER') {
   //outlet is used to render the children of the route
   return <Outlet />
  }
  return <Navigate to="/home" replace />;
}
export  function ProtectedLogin() {
 const{token} = AuthContext();
 
 

 
 if (token.length === 0) {
   //outlet is used to render the children of the route
   return <Outlet />
  }
  return <Navigate to="/home" replace />;
}


