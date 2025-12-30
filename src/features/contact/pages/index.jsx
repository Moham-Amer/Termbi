import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormSchemaValidation } from './config';



export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(contactFormSchemaValidation)
  });

  const [showCta, setShowCta] = React.useState(false);

  const onSubmit = handleSubmit(() => {
    setShowCta(true);
    reset();
  });

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
            // boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            padding: "32px 28px",
            minWidth: 600,
            maxWidth: 600,
            // flex: "1 1 320px",
            display: "flex",
            flexDirection: "column",
            gap: 32,
            height: "100%",
          }}
        >

          <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>

            <div>
              <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 6 }}>
                Contact <span > Us</span>
              </div>
              <div style={{ color: "#555", fontSize: 15, marginBottom: 6 }}>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} noValidate>
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
                placeholder="Name  *"
                {...register('name')}
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
              {errors.name?.message ? (<div style={{ color: 'red', fontSize: 12, marginTop: 4 }}>{errors.name.message}</div>) : null}
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
                  minWidth: 160,
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
            </div>
      <div style={{ position: 'relative', width: '100%', maxWidth: 520, margin: '12px 0' }}>
        <select
          {...register('source')}
          defaultValue=""
          style={{
            appearance: 'none',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            minWidth:545,
            width: '100%',
            background: '#fff',
            border: '1px solid #e6e6e6',
            borderRadius: 8,
            padding: '12px 44px 12px 16px',
            fontSize: 16,
            color: '#333',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        >
          <option value="">How did you find us?</option>
          <option value="google">Google</option>
          <option value="social">Social</option>
          <option value="friend">Friend</option>
          <option value="other">Other</option>
        </select>
        <span style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6L11 1" stroke="#DB4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
            {errors.message?.message ? (<div style={{ color: 'red', fontSize: 12, marginTop: 4 }}>{errors.message.message}</div>) : null}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
              {showCta ? (
                <a href="/" style={{ textDecoration: 'underline', color: '#222' }}>Go back to Home</a>
              ) : <span />}
              <button
                type="submit"
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
                Send Massage
              </button>
            </div>
          </form>
    
        </div>
        {/* Contact Form */}
        <div
          style={{
            background: "#fff",
            borderRadius: 10,
            // boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            padding: "32px 28px",
            minWidth: 340,
            flex: "2 1 480px",
            maxWidth: 700,
          }}
        >
          <div style={{ maxWidth: "300" }}>
      <img src="public/contact.png" height="auto" width="90%"></img>
          </div>
    
        </div>
      </div>
    </div>
  );

}