import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpFormSchemaValidation } from './config';
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
import { userStorage } from '../../storage';
import { Typography } from '@mui/material';


export function SignUpForm() {
  

   const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(signUpFormSchemaValidation)
    });
    const { mutateAsync: signUp, isPending } = useSignUpMutation()
    const navigate = useNavigate();

    const onSubmitHandler = handleSubmit(async values => {
        try {
            const response = await signUp(omit(values))
            console.log("sign up response", response);
            userStorage.set(response.id);
            toast.success('Sign up successfully');
            navigate(appRoutes.login);
            setShowCta(true);
        } catch (e) {
            console.log(e);
            toast.error('Failed to sign up');
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
                Sign <span > Up</span>
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
                type="text"
                placeholder="First Name *"
                {...register('first_name')}
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
              {errors.first_name?.message ? (<div style={{ color: 'red', fontSize: 12, marginTop: 4 }}>{errors.first_name.message}</div>) : null}
                  <input
                type="text"
                placeholder="Last Name *"
                {...register('last_name')}
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
              {errors.last_name?.message ? (<div style={{ color: 'red', fontSize: 12, marginTop: 4 }}>{errors.last_name.message}</div>) : null}
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
                placeholder="Phone Number *"
                {...register('phone')}
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
              {errors.phone?.message ? (<div style={{ color: 'red', fontSize: 12, marginTop: 4 }}>{errors.phone.message}</div>) : null}
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
                             <input
                type="tel"
                placeholder="Confirm Password *"
                {...register('password_confirmation')}
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
              {errors.password_confirmation?.message ? (<div style={{ color: 'red', fontSize: 12, marginTop: 4 }}>{errors.password_confirmation.message}</div>) : null}
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
                Sign Up
              </button>
            </div>
          </form>
    
        </div>
      </div>
    </div>
  );

}