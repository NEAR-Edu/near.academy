import * as PropTypes from 'prop-types'
import * as React from 'react'

import { Formik } from 'formik';
import * as Yup from 'yup';

import { Button } from 'app/App.components/Button/Button.controller'
import { InputField } from 'app/App.components/Form/InputField/Input.controller'

//prettier-ignore
import { BtnContainer, ForgotPasswordCard, ForgotPasswordStyled, ForgotPasswordTitle, Row } from './ForgotPassword.style'

const ValidationSchema = Yup.object().shape({
  usernameOrEmail: Yup.string()
    .matches(/^[a-zA-Z0-9_]*$/, 'Username can only contain letters, numbers and underscores')
    .min(2, 'Username must be longer than or equal to 2 characters')
    .max(50, 'Username must be shorter than or equal to 50 characters')
    .required('This field is required!'),
});

interface IFormInputs {
  usernameOrEmail: string,
}

type ForgotPasswordViewProps = {
  forgotPasswordCallback: (values: any) => void
  loading: boolean
}

export const ForgotPasswordView = ({ forgotPasswordCallback, loading }: ForgotPasswordViewProps) => {
  const initialValues: IFormInputs = {
    usernameOrEmail: '',
  };

  const handleSubmit = (values: IFormInputs) => {
    forgotPasswordCallback(values)
  }

  return (
    <ForgotPasswordStyled>
      <ForgotPasswordTitle>
        <h1>Forgot Password</h1>
      </ForgotPasswordTitle>
      <ForgotPasswordCard>
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
              <BtnContainer>
                <Button text="Submit" color="gradient" type="submit" loading={loading} />
              </BtnContainer>
            </form>
          )}
        </Formik>
      </ForgotPasswordCard>
    </ForgotPasswordStyled>
  )
}

ForgotPasswordView.propTypes = {
  forgotPasswordCallback: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

ForgotPasswordView.defaultProps = {
  loading: false,
}
