"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(Cookies.get('token') || null);

  useEffect(() => {
    const storedUser = Cookies.get('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData, authToken) => {
    setUser(userData.user);
    setToken(authToken);

    Cookies.set('token', authToken, { expires: 1/3 });
    Cookies.set('user', JSON.stringify(userData), { expires: 1/3 });
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    Cookies.remove('token');
    Cookies.remove('user');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
