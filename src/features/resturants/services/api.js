import { httpClient } from '../../../lib/axios';

const API_BASE_URL = 'https://sanad.tamkeen-dev.com/api';

export const getCategories = async () => {
  const response = await httpClient.get(`${API_BASE_URL}/categories`);
  return response.data.data;
};

export const getProducts = async () => {
  const response = await httpClient.get(`${API_BASE_URL}/products`);
  return response.data.data;
};