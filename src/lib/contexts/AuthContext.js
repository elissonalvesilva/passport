"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { TokenService } from '../services/token';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(TokenService.getAccessToken() || null);
  const [refreshToken, setRefreshToken] = useState(TokenService.getRefreshToken() || null);

  const isTokenExpired = (token) => {
    const tokenExpiration = new Date(token);
    const currentTime = new Date();
    return tokenExpiration < currentTime;
  };

  useEffect(() => {
    const storedUser = TokenService.getUser();
    const storedToken = TokenService.getAccessToken();
  
    if (storedUser) {
      if (isTokenExpired(storedToken)) {
        setIsAuthenticated(false);  
      } else {
        setUser(storedUser);
        setIsAuthenticated(true);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const login = (userData, authToken, refresh_token) => {
    setUser(userData);
    setToken(authToken);
    setRefreshToken(refresh_token);

    TokenService.setAccessToken(authToken);
    TokenService.setRefreshToken(refresh_token);
    TokenService.setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    TokenService.remove();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated, refreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
