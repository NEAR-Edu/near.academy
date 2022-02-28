import * as PropTypes from 'prop-types'
import * as React from 'react'

import { Formik } from 'formik';
import * as Yup from 'yup';

import { Button } from 'app/App.components/Button/Button.controller'
import { InputField } from 'app/App.components/Form/InputField/Input.controller'


import { ChangePasswordMeta } from './ChangePassword.meta'
//prettier-ignore
import {
  ChangePasswordCard,
  ChangePasswordStyled,
  ChangePasswordTitle,
  Row,
  BtnContainer
} from './ChangePassword.style'

const ValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be longer than or equal to 8 characters')
    .max(50, 'Password must be shorter than or equal to 50 characters')
    .required('This field is required!'),
  newPassword: Yup.string()
    .min(8, 'Password must be longer than or equal to 8 characters')
    .max(50, 'Password must be shorter than or equal to 50 characters')
    .required('This field is required!'),
});

interface IFormInputs {
  password: string,
  newPassword: string,
}

type ChangePasswordViewProps = {
  changePasswordCallback: (values: any) => void
  loading: boolean
}

export const ChangePasswordView = ({ changePasswordCallback, loading }: ChangePasswordViewProps) => {
  const initialValues: IFormInputs = {
    password: '',
    newPassword: ''
  };

  const handleSubmit = (values: IFormInputs) => {
    changePasswordCallback(values)
  }

  return (
    <ChangePasswordStyled>
      <ChangePasswordMeta />
      <ChangePasswordTitle>
        <h1>Change Password</h1>
      </ChangePasswordTitle>
      <ChangePasswordCard>
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
                    label="Password"
                    type="text"
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
                </Row>
                <Row>
                  <InputField
                    label="New Password"
                    type="password"
                    value={values.newPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="newPassword"
                    inputStatus={
                      errors.newPassword && touched.newPassword
                        ? 'error' : !errors.newPassword && touched.newPassword 
                        ? 'success' : undefined
                      }
                    errorMessage={errors.newPassword && touched.newPassword && errors.newPassword}
                    isDisabled={false}
                  />
                </Row>
                <BtnContainer>
                  <Button text="Submit" color="gradient" type="submit" loading={loading} />
                </BtnContainer>
              </form>
            )}
          </Formik>
      </ChangePasswordCard>
    </ChangePasswordStyled>
  )
}

ChangePasswordView.propTypes = {
  changePasswordCallback: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

ChangePasswordView.defaultProps = {
  loading: false,
}
