import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { Formik } from 'formik';
import * as Yup from 'yup';


import { Button } from 'app/App.components/Button/Button.controller'
import { InputField } from 'app/App.components/Form/InputField/Input.controller'

import { BtnContainer, LoginCard, LoginStyled, LoginTitle, Row } from './Login.style'

const ValidationSchema = Yup.object().shape({
  usernameOrEmail: Yup.string()
    .min(2, 'Username must be longer than or equal to 2 characters')
    .max(50, 'Username must be shorter than or equal to 50 characters')
    .required('This field is required!'),
  password: Yup.string()
    .min(8, 'Password must be longer than or equal to 8 characters')
    .max(50, 'Password must be shorter than or equal to 50 characters')
    .required('This field is required!'),
});

interface IFormInputs {
  usernameOrEmail: string,
  password: string,
}

type LoginViewProps = {
  loginCallback: (values: any) => void
  loading: boolean
}

export const LoginView = ({ loginCallback, loading }: LoginViewProps) => {
  const initialValues: IFormInputs = {
    usernameOrEmail: '',
    password: '',
  };


  const handleSubmit = (values: IFormInputs) => {
    loginCallback(values)
  }

  return (
    <LoginStyled>
      <LoginTitle>
        <h1>Login</h1>
      </LoginTitle>
      <LoginCard>
        <Formik
          initialValues={initialValues}
          validationSchema={ValidationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            setFieldValue,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <Row>
                <InputField
                  label="Username"
                  type="text"
                  value={values.usernameOrEmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="usernameOrEmail"
                  inputStatus={
                    errors.usernameOrEmail && touched.usernameOrEmail
                      ? 'error' : !errors.usernameOrEmail && touched.usernameOrEmail 
                      ? 'success' : undefined
                    }
                  errorMessage={errors.usernameOrEmail && touched.usernameOrEmail && errors.usernameOrEmail}
                  isDisabled={false}
                />
              </Row>
              <Row>
                <InputField
                  label="Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="password"
                  inputStatus={
                    errors.password && touched.password
                      ? 'error' : !errors.password && touched.password 
                      ? 'success' : undefined
                    }
                  errorMessage={errors.password && touched.password && errors.password}
                  isDisabled={false}
                />
                <div className={'forgot-password'}>
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>
              </Row>
              <BtnContainer>
                <Button text="Login" color="gradient" type="submit" loading={loading} />
              </BtnContainer>
            </form>
          )}
        </Formik>
        <div className={'alreadyBox'}>
          Don’t have an account? <Link to="/sign-up">Sign up</Link>
        </div>
      </LoginCard>
    </LoginStyled>
  )
}

LoginView.propTypes = {
  loginCallback: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

LoginView.defaultProps = {
  loading: false,
}
