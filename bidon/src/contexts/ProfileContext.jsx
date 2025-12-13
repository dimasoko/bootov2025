import React, { createContext, useContext } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from './AuthContext';
import { getAppointments, deleteAppointment } from '.../../infrastructure/api/services';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const { user, logout } = useAuth();
  const queryClient = useQueryClient();

  // Загрузка записей пользователя
  const { data: visits = [], isLoading: loadingVisits, error } = useQuery({
    queryKey: ['appointments'],
    queryFn: async () => {
      const response = await getAppointments();
      return response.data;
    },
    enabled: !!user, // Загружаем только если пользователь авторизован
  });

  // Мутация для отмены записи
  const deleteMutation = useMutation({
    mutationFn: deleteAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
    },
  });

  const cancelVisit = async (visitId) => {
    try {
      await deleteMutation.mutateAsync(visitId);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Ошибка отмены записи' 
      };
    }
  };

  const value = {
    userName: user ? `${user.firstName} ${user.lastName}` : '',
    visits,
    loadingVisits,
    error: error?.message,
    onLogout: logout,
    cancelVisit,
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within ProfileProvider');
  }
  return context;
};
