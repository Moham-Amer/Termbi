import { useQuery } from '@tanstack/react-query';
import { getCategories, getProducts } from './api';

export function useGetCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
  });
}

export function useGetProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  });
}