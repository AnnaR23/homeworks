import { Formik, Form, Field, ErrorMessage } from 'formik'
import { formSchema } from '../schemas/formSchema.js'
import { useState } from 'react'


const FormExample = () => {
  // исходные значения
  const initialValues = {
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  }


// логика для показа пароля
  const [showPassword, setShowPassword] = useState(false)


// функция для отправки формы
  const onSubmit = async (values, { resetForm }) => {
    console.log('Submitted!')
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Submitted!', values)
    resetForm() // сбрасываем значения формы
  }


  return (
    <div>
      <h2>Registration</h2>
      {/*подключаем Formik и передаем ей параметры*/}
      <Formik
        initialValues={initialValues} // исходные значения формы
        validationSchema={formSchema} // валидация по схеме
        onSubmit={onSubmit} // функция отправки
      >

        {/*Форма*/}
        <Form>
          {/*поле для имени*/}
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          {/*поле для почты*/}
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          {/*поле для пароля*/}
          <div>
            <label htmlFor="password">Password:</label>
            <Field
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
            />

            <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? 'Hide Password' : 'Show Password'} {/*если ShowPassword true, показываем текст, иначе скрываем*/}
            </button>
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          {/*поле для повторного пароля*/}
          <div>
            <label htmlFor="repeatPassword">repeatPassword:</label>
            <Field type="repeatPassword" id="repeatPassword" name="repeatPassword" />
            <ErrorMessage name="repeatPassword" component="div" className="error" />
          </div>

          {/*кнопка отправки*/}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default FormExample