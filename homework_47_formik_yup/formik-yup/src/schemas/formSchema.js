import * as Yup from 'yup'; // импортируем yup схему для валидации


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.


// создаем схему валидации для формы
export const formSchema = Yup.object({


  // валидации для имени
  name: Yup.string()
    .min(2, 'The name mast be at least 2 characters')
    .required('Name is required'),


  // валидации для email
  email: Yup.string()
    .email('Incorrect email address')
    .required('Email is required'),


  // валидации для пароля
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(passwordRules, 'Password should be at least 8 char, 1 upper, 1 lower, 1 num')
    .required('Password is required'),


  // валидации для повторного пароля
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password must match')
    .required('Repeat you password')
})
