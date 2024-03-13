import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("userToken")
  const [isAuthenticated, setIsAuthenticated] = useState(token);
  console.log(isAuthenticated)

  // Implement login/logout logic here, updating isAuthenticated

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;