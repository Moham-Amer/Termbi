import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchemaValidation } from './config';
import { useState } from 'react';
import { FormInput } from '../../../../shared/components/forms/form-input';
import { useLoginMutation } from '../../services/mutations';
import { useSignUpMutation } from '../../services/mutations';
import Box from '@mui/material/Box';
import './style.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '../../../../routes'
import omit from 'lodash/omit';
import { userStorage, authStorage, userInfoStorage } from '../../storage';
import { Typography } from '@mui/material';


export function LoginForm() {
  

   const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(loginFormSchemaValidation)
    });
    const { mutateAsync: login, isPending } = useLoginMutation()
    const navigate = useNavigate();

    const onSubmitHandler = handleSubmit(async values => {
        try {
          const response = await login(omit(values))
          console.log("login response", response);

          const payload = response?.data ? response.data : response;
          const token = payload?.access_token || payload?.data?.access_token || payload?.data?.token;
          const customer = payload?.customer || payload?.data?.customer;

          if (token) {
            localStorage.setItem('access_token', token);
            authStorage.set({ token, customer });
          }

          if (customer) {
            userStorage.set(customer.id ?? customer.id);
            userInfoStorage.set(customer);
          }

          toast.success('Login successfully');
          navigate(appRoutes.home);
          window.dispatchEvent(new Event('authChange'));
          setShowCta(true);
        } catch (e) {
          console.log(e);
          toast.error('Failed to login');
        }
    })
  const [showCta, setShowCta] = React.useState(false);


  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh", padding: "40px 0" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          gap: 32,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >

        <div
          style={{
            background: "#fff",
            borderRadius: 10,
            padding: "32px 28px",
            minWidth: 600,
            maxWidth: 600,
            display: "flex",
            flexDirection: "column",
            gap: 32,
            height: "100%",
          }}
        >

          <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>

            <div>
              <div style={{ fontWeight: 600, fontSize: 50, marginBottom: 6 }}>
                Log <span > In</span>
              </div>
             
            </div>
          </div>
          <form onSubmit={onSubmitHandler} noValidate>
            <div
              style={{
                display: "flex",
                gap: 16,
                marginBottom: 16,
                flexWrap: "wrap",
              }}
            >
   <input
                type="email"
                placeholder="Email *"
                {...register('email')}
                style={{
                  flex: "1 1 180px",
                  minWidth: 500,
                  background: "#f5f5f5",
                  border: "none",
                  borderRadius: 6,
                  padding: "14px 16px",
                  fontSize: 16,
                  marginBottom: 0,
                  outline: "none",
                }}
              />
              {errors.email?.message ? (<div style={{ color: 'red', fontSize: 12, marginTop: 4 }}>{errors.email.message}</div>) : null}
                    <input
                type="tel"
                placeholder="Password *"
                {...register('password')}
                style={{
                  flex: "1 1 180px",
                  minWidth: 500,
                  background: "#f5f5f5",
                  border: "none",
                  borderRadius: 6,
                  padding: "14px 16px",
                  fontSize: 16,
                  marginBottom: 0,
                  outline: "none",
                }}
              />
              {errors.password?.message ? (<div style={{ color: 'red', fontSize: 12, marginTop: 4 }}>{errors.password.message}</div>) : null}
        </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
              {showCta ? (
                <a href="/" style={{ textDecoration: 'underline', color: '#222' }}>Go back to Home</a>
              ) : <span />}
              <button
                type="submit"
                onClick={() => { setShowCta(false); }}
                style={{
                  background: "#DB4444",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "14px 36px",
                  fontSize: 16,
                  fontWeight: 500,
                  width:"100%",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                Log In
              </button>
            </div>
          </form>
    
        </div>
      </div>
    </div>
  );

}