import axios from 'axios';
import { BASE_URL } from '../const/conts';

const apiClient = axios.create({
  baseURL: BASE_URL,
});

export const getNews = () => {
  return apiClient.get('news');
};

export const addNews = (newsData) => {
  return apiClient.post('news', newsData);
};

export const updateNews = ({ id, ...data }) => {
  return apiClient.put(`news/${id}`, data);
};

export const deleteNews = (id) => {
  return apiClient.delete(`news/${id}`);
};
