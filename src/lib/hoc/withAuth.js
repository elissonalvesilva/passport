"use client";

import { useEffect } from 'react';
import { redirect } from 'next/navigation'
import { useAuth } from "../contexts/AuthContext";
import Loading from '@/components/Loading';

export default function withAuth(Component) {
  return function AuthComponent(props) {
    const { isAuthenticated, logout, user } = useAuth();

    useEffect(() => {
      if (!isAuthenticated) {
        logout();
        redirect('/');
      }
    }, [isAuthenticated, logout]);


    if (user && !Object.keys(user).length && isAuthenticated) {
      return <Loading />;
    }

    return <Component {...props} />;
  };
}