import axios from 'axios';
import { BASE_URL } from '../const/conts';

const apiClient = axios.create({
  baseURL: BASE_URL,
});

// токен к каждому запросу
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// аутх

export const login = (credentials) => {
  return apiClient.post('auth/login', credentials);
};

export const register = (userData) => {
  return apiClient.post('auth/register', userData);
};

export const getCurrentUser = () => {
  return apiClient.get('auth/me');
};

// запись

export const getAppointments = () => {
  return apiClient.get('appointments');
};

export const createAppointment = (appointmentData) => {
  return apiClient.post('appointments', appointmentData);
};

export const deleteAppointment = (id) => {
  return apiClient.delete(`appointments/${id}`);
};

// услуги

export const getServices = () => {
  return apiClient.get('services');
};

export const addService = (serviceData) => {
  return apiClient.post('services', serviceData);
};

export const updateService = ({ id, ...data }) => {
  return apiClient.put(`services/${id}`, data);
};

export const deleteService = (id) => {
  return apiClient.delete(`services/${id}`);
};
