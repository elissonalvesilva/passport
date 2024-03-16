"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(Cookies.get('token') || null);

  useEffect(() => {
    const storedUser = Cookies.get('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);

    Cookies.set('token', authToken, { expires: 1/3 });
    Cookies.set('user', JSON.stringify(userData), { expires: 1/3 });
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    Cookies.remove('token');
    Cookies.remove('user');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
