import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormInput } from '../../../../../shared/components/forms/form-input';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpFormSchemaValidation } from './config';
import { useLoginMutation } from '../../services/mutations';
import Box from '@mui/material/Box';
import './style.css';
import omit from 'lodash/omit';
import { userStorage } from '../../storage';
import { Typography } from '@mui/material';

function Stepper({ current = 0, onStepClick, allComplete = false }) {
    const steps = [
        { label: 'Step 1', value: 1 },
        { label: 'Step 2', value: 2 },
        { label: 'Step 3', value: 3 },
        { label: 'Done', value: '✓' },
    ];
    

    return (
        <div style={{ display: 'flex', alignItems: 'center', marginTop: -50, marginLeft: 16 }}>
            {steps.map((step, index) => {
                const isActive = index <= current;
                const circleColor = allComplete ? '#2e7d32' : (isActive ? '#DB4444' : '#eee');
                const textColor = isActive ? '#fff' : '#666';

                return (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <div
                            onClick={() => onStepClick && onStepClick(index)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => { if (e.key === 'Enter') onStepClick && onStepClick(index); }}
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700,
                                marginTop: -8,
                                zIndex: 10,
                                background: circleColor,
                                color: textColor,
                                userSelect: 'none'
                            }}
                        >
                            {step.value}
                        </div>
                        {index < steps.length - 1 && (
                            <div
                                style={{
                                    width: 40,
                                    height: 2,
                                    background: allComplete ? '#2e7d32' : (index < current ? '#DB4444' : '#e0e0e0'),
                                    margin: '0 8px',
                                }}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export function ResturantSignUpForm() {
    const { register, formState: { errors }, handleSubmit, trigger } = useForm({
        resolver: yupResolver(signUpFormSchemaValidation)
    });
    const { mutateAsync: login, isPending } = useLoginMutation()
    const [step, setStep] = useState(0);

    const stepFields = [

        ['resturantName', 'resturantAddress', 'resturantPhone'],
        ['yourName', 'yourEmail', 'yourPhone'],
        ['password', 'confirmPassword']
    ];

    const onSubmitHandler = handleSubmit(async values => {
        try {
            const response = await login(omit(values))
            userStorage.set(response.id);
            localStorage.setItem('access_token', response.access_token)
            console.log(userStorage.get());
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    })



    const handleNext = async () => {
        const fields = stepFields[step] || [];
        const valid = await trigger(fields);
        if (!valid) return;
        if (step < stepFields.length - 1) setStep(s => s + 1);
    }

    const handleBack = () => {
        if (step > 0) setStep(s => s - 1);
    }

    const handleStepClick = async (targetIndex) => {
        if (targetIndex === step) return;
        // moving backwards: allow immediately
        if (targetIndex < step) {
            setStep(targetIndex);
            return;
        }

        // moving forward: validate current step first
        const fields = stepFields[step] || [];
        const valid = await trigger(fields);
        if (!valid) return;
        setStep(targetIndex);
    }

    return (
        <div
            style={{
                minHeight: "80vh",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px 0",
            }}
        >
            <div
                style={{
                    display: "flex",
                    gap: 48,
                    width: "100%",
                    maxWidth: 1100,
                    background: "#fff",
                    borderRadius: 10,
                    // boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    padding: "0 0",
                }}
            >

                {/* Signup Form Section */}
                <div
                    style={{
                        flex: "1 1 50%",
                        minWidth: 350,
                        padding: "64px 40px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignContent: "center",
                        gap: "12px",
                    }}
                >
                    <Stepper current={step} onStepClick={handleStepClick} allComplete={step === stepFields.length} />
                    <h2 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: 12 }}>
                        {(() => {
                            const headings = [
                                'Tell us about your restaurant',
                                'Tell us about yourself',
                                'Set your password'
                            ];
                            return headings[step] || 'Create an account';
                        })()}
                    </h2>
                    <form onSubmit={onSubmitHandler}>
                        {(() => {
                            const fields = stepFields[step] || [];
                            const labelFromKey = (k) => {
                                // Replace camelCase / misspellings with nicer label
                                let label = k.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ');
                                label = label.replace(/resturant/gi, 'Restaurant');
                                // capitalize first letter
                                label = label.charAt(0).toUpperCase() + label.slice(1);
                                // common replacements
                                label = label.replace(/your /i, 'Your ');
                                return label;
                            }

                            return fields.map((field) => {
                                const isPassword = /password/i.test(field);
                                const isPhone = /phone/i.test(field);
                                const type = isPassword ? 'password' : (isPhone ? 'tel' : 'text');
                                return (
                                    <FormInput
                                        key={field}
                                        type={type}
                                        placeholder={labelFromKey(field)}
                                        errorMessage={errors[field]?.message}
                                        {...register(field)}
                                        style={{
                                            width: "100%",
                                            background: "transparent",
                                            border: "none",
                                            borderBottom: "1.5px solid #ccc",
                                            padding: "14px 0",
                                            fontSize: 16,
                                            marginBottom: 28,
                                            outline: "none",
                                        }}
                                    />
                                )
                            })
                        })()}

                        <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                            {step > 0 && (
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    style={{
                                        background: "#fff",
                                        color: "#222",
                                        border: "1.5px solid #ccc",
                                        borderRadius: 6,
                                        padding: "12px 18px",
                                        fontSize: 16,
                                        fontWeight: 500,
                                        cursor: "pointer",
                                    }}
                                >
                                    Back
                                </button>
                            )}

                            {step < stepFields.length - 1 ? (
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    style={{
                                        background: "#DB4444",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: 6,
                                        padding: "12px 18px",
                                        fontSize: 16,
                                        fontWeight: 500,
                                        cursor: "pointer",
                                        width: "100%",
                                        marginBottom: 18,
                                        transition: "background 0.2s",
                                    }}
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    style={{
                                        background: "#DB4444",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: 6,
                                        padding: "12px 0",
                                        fontSize: 16,
                                        fontWeight: 500,
                                        cursor: "pointer",
                                        width: "100%",
                                        marginBottom: 18,
                                        transition: "background 0.2s",
                                    }}
                                >
                                    {isPending ? 'Loading..' : 'Create Account'}
                                </button>
                            )}
                        </div>

                        <div style={{ textAlign: "center", color: "#888", fontSize: 15 }}>
                            Already have account?{" "}
                            <a
                                href="/login"
                                style={{
                                    color: "#c11919ff",

                                    marginLeft: 4,
                                    fontWeight: 500,
                                }}
                            >
                                Log in
                            </a>
                        </div>
                    </form>
                </div>
                {/* Image Section */}
                <div
                    style={{
                        flex: "1 1 50%",
                        minWidth: 350,
                        background: "#f6f6f6",
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "32px 0",
                    }}
                >
                    <Box
                        sx={{
                            flexDirection: 'column',
                            display: 'flex',
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            gap: '15px'
                        }}
                    >
                        <img
                            src="auth/registerLogo.png"
                            alt="Shopping"
                            style={{
                                width: "40%",
                                maxWidth: 450,
                                borderRadius: 8,
                                objectFit: "cover",
                            }}
                        />

                        <Typography
                            sx={{

                            }}
                        >
                            Restaurants Management System
                        </Typography>

                        <img
                            src="/illustration.png"
                            alt="Shopping"
                            style={{
                                width: "90%",
                                maxWidth: 450,
                                borderRadius: 8,
                                objectFit: "cover",
                            }}
                        />
                    </Box>

                </div>
            </div>
        </div>
    );
}