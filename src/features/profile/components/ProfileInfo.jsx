import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useUpdateProfileMutation } from '../services/mutations';
import { userInfoStorage } from '../../auth/storage';
import { toast } from 'react-toastify';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone is required'),
});

export default function ProfileInfo() {
  const [profile, setProfile] = useState(userInfoStorage.get() || {});
  const updateMutation = useUpdateProfileMutation();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  React.useEffect(() => {
    reset(profile);
  }, [profile, reset]);

  const onSubmit = async (data) => {
    try {
      await updateMutation.mutateAsync(data);
      userInfoStorage.set(data);
      setProfile(data);
      toast.success('Profile updated successfully');
    } catch (e) {
      toast.error('Failed to update profile');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 400 }}>
      <Typography variant="h6" gutterBottom>Profile Information</Typography>
      <TextField
        fullWidth
        label="Name"
        {...register('name')}
        error={!!errors.name}
        helperText={errors.name?.message}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Phone"
        {...register('phone')}
        error={!!errors.phone}
        helperText={errors.phone?.message}
        margin="normal"
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }} disabled={updateMutation.isPending}>
        {updateMutation.isPending ? 'Updating...' : 'Update Profile'}
      </Button>
    </Box>
  );
}