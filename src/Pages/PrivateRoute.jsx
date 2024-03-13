
import {Navigate, Outlet} from 'react-router'
import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';



 const PrivateRoutes = ({UserID}) => {
   const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; 
};












export default PrivateRoutes


