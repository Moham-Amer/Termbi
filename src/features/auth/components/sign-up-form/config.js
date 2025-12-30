import * as yup from 'yup';

export const signUpFormSchemaValidation = yup.object({
    first_name: yup.string().max(20).trim().required(),
    last_name: yup.string().max(20).trim().required(),
    email: yup.string().email().trim().required(),
    phone: yup.string().matches(/^[0-9]{10,15}$/, 'Phone number is not valid').required(),
    password: yup.string().max(20).required(),
    password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required(),
        // .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Password must be at least 8 characters long and contain at least one letter and one number'),

})