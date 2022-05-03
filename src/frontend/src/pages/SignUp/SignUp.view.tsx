import * as PropTypes from 'prop-types'
import * as React from 'react'

import { Link } from 'react-router-dom'

import { Formik } from 'formik'
import * as Yup from 'yup'

import { Button } from 'app/App.components/Button/Button.controller'
import { InputField } from 'app/App.components/Form/InputField/Input.controller'

import { BtnContainer, Row, SignUpCard, SignUpStyled, SignUpTitle } from './SignUp.style'

export const ValidationSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/^[a-zA-Z0-9_]*$/, 'Username can only contain letters, numbers and underscores')
    .min(2, 'Username must be longer than or equal to 2 characters')
    .max(50, 'Username must be shorter than or equal to 50 characters')
    .required('This field is required!'),
  email: Yup.string().email('Invalid email').required('This field is required!'),
  password: Yup.string()
    .matches(/^(?=.*[0-9])(?=.*[a-zA-Z])(.+)$/, 'Password must be longer than or equal to 8 characters')
    .min(8, 'Password must be longer than or equal to 8 characters')
    .max(50, 'Password must be shorter than or equal to 50 characters')
    .required('This field is required!'),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password'), null], 'Password mismatch'),
  referral: Yup.string()
    .matches(/^[a-zA-Z0-9_]*$/, 'Referral can only contain letters, numbers and underscores')
    .min(0, 'Referral must be longer than or equal to 0 characters')
    .max(20, 'Referral must be shorter than or equal to 20 characters'),
})

interface IFormInputs {
  username: string
  email: string
  password: string
  confirmPassword: string
  referral: string
}

type SignUpViewProps = {
  signUpCallback: (values: any) => void
  loading: boolean
}

export const SignUpView = ({ signUpCallback, loading }: SignUpViewProps) => {
  const handleSubmit = (values: IFormInputs) => {
    console.log('SignUp.view handleSubmit', values.username, values.email)
    signUpCallback(values)
  }

  const getReferralValue = (value: string): string => {
    const indexQuestionMark = value.indexOf('?')
    if (indexQuestionMark) {
      const urlParams = new URLSearchParams(value.slice(indexQuestionMark))
      const referralValue = urlParams.get('referral')

      return referralValue || ''
    }

    return value
  }

  const getInitialValues = (): IFormInputs => {
    const initialValues: IFormInputs = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      referral: '',
    }

    const url = window.location.href

    initialValues.referral = getReferralValue(url)

    return initialValues
  }

  return (
    <SignUpStyled>
      <SignUpTitle>
        <h1>Sign Up</h1>
      </SignUpTitle>
      <SignUpCard>
        <Formik initialValues={getInitialValues()} validationSchema={ValidationSchema} onSubmit={handleSubmit}>
          {({ values, errors, touched, setFieldValue, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <Row>
                <InputField
                  label="Username"
                  type="text"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="username"
                  inputStatus={
                    errors.username && touched.username
                      ? 'error'
                      : !errors.username && touched.username
                      ? 'success'
                      : undefined
                  }
                  errorMessage={errors.username && touched.username && errors.username}
                  isDisabled={false}
                />
              </Row>
              <Row>
                <InputField
                  label="Email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  inputStatus={
                    errors.email && touched.email ? 'error' : !errors.email && touched.email ? 'success' : undefined
                  }
                  errorMessage={errors.email && touched.email && errors.email}
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
                      ? 'error'
                      : !errors.password && touched.password
                      ? 'success'
                      : undefined
                  }
                  errorMessage={errors.password && touched.password && errors.password}
                  isDisabled={false}
                />
              </Row>
              <Row>
                <InputField
                  label="Re-enter password"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="confirmPassword"
                  inputStatus={
                    errors.confirmPassword && touched.confirmPassword
                      ? 'error'
                      : !errors.confirmPassword && touched.confirmPassword
                      ? 'success'
                      : undefined
                  }
                  errorMessage={errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                  isDisabled={false}
                />
              </Row>
              <Row>
                <InputField
                  label="Referral"
                  type="text"
                  value={values.referral}
                  onChange={(e) => {
                    let value = e.target.value

                    const indexQuestionMark = value.indexOf('?')
                    if (indexQuestionMark) {
                      const urlParams = new URLSearchParams(value.slice(indexQuestionMark))
                      const myParam = urlParams.get('referral')
                      if (myParam) {
                        value = myParam
                      }
                    }

                    setFieldValue('referral', value)
                  }}
                  onBlur={handleBlur}
                  name="referral"
                  inputStatus={
                    errors.referral && touched.referral
                      ? 'error'
                      : !errors.referral && touched.referral
                      ? 'success'
                      : undefined
                  }
                  errorMessage={errors.referral && touched.referral && errors.referral}
                  isDisabled={false}
                />
              </Row>
              <BtnContainer>
                <Button text="Sign up" color="gradient" type="submit" loading={loading} />
              </BtnContainer>
            </form>
          )}
        </Formik>
        <div className={'alreadyBox'}>
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </SignUpCard>
    </SignUpStyled>
  )
}

SignUpView.propTypes = {
  signUpCallback: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

SignUpView.defaultProps = {
  loading: false,
}
