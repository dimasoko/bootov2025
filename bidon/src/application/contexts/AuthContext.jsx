import React, { createContext, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAuthMode, setAuthMode } from '../../infrastructure/store/slices/uiSlice';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { login as apiLogin, register as apiRegister, getCurrentUser } from '../../infrastructure/api/services';

const AuthContext = createContext();

export function AuthProvider({ children }) {  
  const isLogin = useSelector((state) => state.ui.isLogin);
  const dispatch = useDispatch();
  
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const token = localStorage.getItem('authToken');
      if (!token) return null;
      try {
        const response = await getCurrentUser();
        return response.data;
      } catch (error) {
        localStorage.removeItem('authToken');
        return null;
      }
    },
    retry: false,
    staleTime: Infinity,
  });

  const loginMutation = useMutation({
    mutationFn: apiLogin,
    onSuccess: (response) => {
      localStorage.setItem('authToken', response.data.token);
      queryClient.setQueryData(['currentUser'], response.data.user);
    },
  });

  const registerMutation = useMutation({
    mutationFn: apiRegister,
    onSuccess: (response) => {
      localStorage.setItem('authToken', response.data.token);
      queryClient.setQueryData(['currentUser'], response.data.user);
    },
  });

  const login = async (credentials) => {
    try {
      await loginMutation.mutateAsync(credentials);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Ошибка входа'
      };
    }
  };

  const registerUser = async (userData) => {
    try {
      await registerMutation.mutateAsync(userData);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Ошибка регистрации'
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    queryClient.setQueryData(['currentUser'], null);
    queryClient.clear();
  };

  const value = {
    user,
    isLogin,
    setIsLogin: (value) => dispatch(setAuthMode(value)),
    toggleAuthMode: () => dispatch(toggleAuthMode()),
    login,
    registerUser,
    logout,
    loading: isLoading || loginMutation.isPending || registerMutation.isPending,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
