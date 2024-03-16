"use client";

import { redirect } from 'next/navigation'
import { useAuth } from "../contexts/AuthContext";
import Loading from '@/components/Loading';

export default function withAuth(Component) {
  return function AuthComponent(props) {
    const { isAuthenticated, logout, user } = useAuth();

    if (!Object.keys(user).length) {
      return <Loading />;
    }
    
    if (!isAuthenticated) {
      logout();
      redirect('/');
    }

    return <Component {...props} />;
  };
}