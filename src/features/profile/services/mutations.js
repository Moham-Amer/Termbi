import { useMutation, useQuery } from '@tanstack/react-query';
import ProfileServices from './api';

export function useGetProfile() {
    return useQuery({
        queryKey: ['profile'],
        queryFn: () => ProfileServices.getProfile()
    });
}

export function useUpdateProfileMutation() {
    return useMutation({
        mutationFn: payload => ProfileServices.updateProfile(payload)
    });
}

export function useGetOrders() {
    return useQuery({
        queryKey: ['orders'],
        queryFn: () => ProfileServices.getOrders()
    });
}