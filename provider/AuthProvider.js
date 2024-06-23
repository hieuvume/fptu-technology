'use client'
import authApi from '@/api/authApi';
import { getAccessToken, removeAccessToken } from '@/utils/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
    const token = getAccessToken()
    if (token && token.access_token) {
      loadUser()
    }
  }, []);

  const loadUser = () => {
    authApi.me().then((data) => {
      const { user } = data
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    })
      .catch(() => {
        setUser(null);
        localStorage.removeItem('user');
      })
      .finally(() => setLoading(false))
  }

  const isAdmin = () => {
    return user?.role === 'ADMIN';
  }

  const isModerator = () => {
    return user?.role === 'MODERATOR';
  }

  const isAuthor = () => {
    return user?.role === 'AUTHOR';
  }

  const isContributor = () => {
    return user?.role === 'CONTRIBUTOR';
  }

  const isUser = () => {
    return user?.role === 'USER';
  }

  const login = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  }

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    removeAccessToken()
  }

  const isAuthenticated = () => {
    return user !== null;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, isAuthenticated, isAdmin, isModerator, isUser, isAuthor, isContributor }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  return useContext(AuthContext);
}

export default useAuth;