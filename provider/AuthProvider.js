'use client'
import authApi from '@/api/authApi';
import { getAccessToken, removeAccessToken } from '@/utils/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [firstLoaded, setFirstLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = getAccessToken();
    if (token && token.access_token) {
      loadUser()
    } else {
      setLoading(false)
      setFirstLoaded(true)
    }
  }, []);

  const loadUser = () => {
    authApi.me().then((data) => {
      const { user } = data;
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    })
    .catch(() => {
      setUser(null);
      localStorage.removeItem('user');
    })
    .finally(() => {
      setLoading(false);
      setFirstLoaded(true);
    });
  };

  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const isAdmin = () => {
    return user?.role === 'ADMIN';
  };

  const isModerator = () => {
    return user?.role === 'MODERATOR';
  };

  const isAuthor = () => {
    return user?.role === 'AUTHOR';
  };

  const isContributor = () => {
    return user?.role === 'CONTRIBUTOR';
  };

  const isUser = () => {
    return user?.role === 'USER';
  };

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    removeAccessToken();
    window.location.href = '/';
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        isAuthenticated,
        isAdmin,
        isModerator,
        isUser,
        isAuthor,
        isContributor,
        firstLoaded,
        updateUser, 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
