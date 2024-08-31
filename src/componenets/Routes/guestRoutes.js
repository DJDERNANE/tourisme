// src/components/Routes/guestRoutes.js
import { Outlet, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const GuestRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false); // To handle loading state

  const logout = () => {
    localStorage.removeItem('token');
  };

  // const isTokenExpired = () => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     setIsAuthenticated(false);
  //     setLoading(false);
  //     return;
  //   }
  //   try {
  //     const decoded = jwtDecode(token);
  //     if (decoded.exp * 1000 > Date.now()) {
  //       setIsAuthenticated(true);
  //     } else {
  //       logout();
  //       setIsAuthenticated(false);
  //     }
  //   } catch (e) {
  //     logout();
  //     setIsAuthenticated(false);
  //   } finally {
  //     setLoading(false); // Ensure loading is set to false after checking token
  //   }
  // };

  // useEffect(() => {
  //   isTokenExpired();
  // }, []); // Empty dependency array ensures this runs only once after initial render

  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default GuestRoute;
