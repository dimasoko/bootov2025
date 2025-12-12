import React, { createContext, useContext } from 'react';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { createAppointment, getServices } from '../api/services';

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const queryClient = useQueryClient();

  // Загружаем услуги для маппинга
  const { data: services = [] } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await getServices();
      return response.data;
    },
  });

  const mutation = useMutation({
    mutationFn: createAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
    },
  });

  const createBooking = async (data) => {
    try {
      // Находим ID услуги по названию
      const service = services.find(s => s.title === data.visitType);
      
      if (!service) {
        return { 
          success: false, 
          message: 'Услуга не найдена' 
        };
      }

      const appointmentData = {
        serviceId: service.id, // ← берем ID из загруженных услуг
        date: data.date,
        time: data.time,
      };

      await mutation.mutateAsync(appointmentData);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Ошибка создания записи' 
      };
    }
  };

  const value = {
    createBooking,
    loading: mutation.isPending,
    error: mutation.error,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider');
  }
  return context;
};
