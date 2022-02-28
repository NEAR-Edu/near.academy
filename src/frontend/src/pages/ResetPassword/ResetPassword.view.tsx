import * as PropTypes from 'prop-types'
import * as React from 'react'

import { Formik } from 'formik';
import * as Yup from 'yup';

import { Button } from 'app/App.components/Button/Button.controller'
import { InputField } from 'app/App.components/Form/InputField/Input.controller'

//prettier-ignore
import {
  ResetPasswordCard,
  ResetPasswordStyled,
  ResetPasswordTitle,
  Row,
  BtnContainer
} from './ResetPassword.style'

const ValidationSchema = Yup.object().shape({
  solution: Yup.string()
    .matches(/^[0-9]*$/, 'Solution can only contain numbers')
    .min(4, 'Solution must equal to 4 characters')
    .max(4, 'Solution must equal to 4 characters')
    .required('This field is required!'),
  newPassword: Yup.string()
    .min(8, 'Password must be longer than or equal to 8 characters')
    .max(50, 'Password must be shorter than or equal to 50 characters')
    .required('This field is required!'),
});

interface IFormInputs {
  solution: string,
  newPassword: string,
}

type ResetPasswordViewProps = {
  resetPasswordCallback: (values: any) => void
  loading: boolean
}

export const ResetPasswordView = ({ resetPasswordCallback, loading }: ResetPasswordViewProps) => {
  const initialValues: IFormInputs = {
    solution: '',
    newPassword: ''
  };

  const handleSubmit = (values: IFormInputs) => {
    resetPasswordCallback(values)
  }

  return (
    <ResetPasswordStyled>
      <ResetPasswordTitle>
        <h1>Reset Password</h1>
      </ResetPasswordTitle>
      <ResetPasswordCard>
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
                    label="Solution"
                    type="text"
                    value={values.solution}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="solution"
                    inputStatus={
                      errors.solution && touched.solution
                        ? 'error' : !errors.solution && touched.solution 
                        ? 'success' : undefined
                      }
                    errorMessage={errors.solution && touched.solution && errors.solution}
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
      </ResetPasswordCard>
    </ResetPasswordStyled>
  )
}

ResetPasswordView.propTypes = {
  resetPasswordCallback: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

ResetPasswordView.defaultProps = {
  loading: false,
}
