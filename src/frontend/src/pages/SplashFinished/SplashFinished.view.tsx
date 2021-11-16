import * as React from 'react'
import * as PropTypes from 'prop-types'
import { useHistory, Link } from 'react-router-dom'

import { Formik } from 'formik';

import classnames from 'classnames';

import { PublicUser } from 'shared/user/PublicUser'

import { Header } from 'app/App.components/Header/Header.controller'
import { MainFooter } from 'app/App.components/MainFooter/MainFooter.controller'
import { InputField } from 'app/App.components/Form/InputField/Input.controller'

import { BoxLogo, FormWrapp, Row, SplashFinishedContainer, SubTitle, Title, Wrapp, WrappForm, BtnContainer, BoxImgLeft, BoxImgRight, EmptyBlock } from './SplashFinished.style'
import { Button } from 'app/App.components/Button/Button.controller';

import { ValidationSchema } from '../SignUp/SignUp.view';

type SplashFinishedViewProps = {
  user?: PublicUser,
  signUpCallback: (values: any) => void
  loading: boolean
}

interface IFormInputs {
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
  referral: string,
}

export const SplashFinishedView = ({ user, loading, signUpCallback }: SplashFinishedViewProps) => {
  const history = useHistory()

  const getReferralValue = (value: string): string => {
    const indexQuestionMark = value.indexOf('?');
    if (indexQuestionMark) {
      const urlParams = new URLSearchParams(value.slice(indexQuestionMark));
      const referralValue = urlParams.get('referral');

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
    };

    const url = window.location.href;

    initialValues.referral = getReferralValue(url)

    return initialValues;
  }

  const handleSubmit = (values: IFormInputs) => {
    signUpCallback(values)
  }

  const getCertificate = () => {
    history.push(`/user/${user?.username}`)
  }

  return (
    <SplashFinishedContainer className={classnames(user && 'isUser')}>
      <Header authPage />
      <EmptyBlock />
      <Wrapp>
        <BoxLogo />
        <Title>Congratulations!</Title>
        {user ? (
          <BtnContainer className={'isUser'}>
            <Button text="Get your certificate" color="gradient" onClick={getCertificate} />
          </BtnContainer>
        ) : (
          <WrappForm>
            <SubTitle>
              Please, sign up to obtain your certificate:
            </SubTitle>
            <FormWrapp>
              <Formik
                initialValues={getInitialValues()}
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
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="username"
                        inputStatus={
                          errors.username && touched.username
                            ? 'error' : !errors.username && touched.username 
                            ? 'success' : undefined
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
                          errors.email && touched.email
                            ? 'error' : !errors.email && touched.email 
                            ? 'success' : undefined
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
                            ? 'error' : !errors.password && touched.password 
                            ? 'success' : undefined
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
                            ? 'error' : !errors.confirmPassword && touched.confirmPassword 
                            ? 'success' : undefined
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
                          let value = e.target.value;

                          const indexQuestionMark = value.indexOf('?');
                          if (indexQuestionMark) {
                            const urlParams = new URLSearchParams(value.slice(indexQuestionMark));
                            const myParam = urlParams.get('referral');
                            if (myParam) {
                              value = myParam
                            }
                          }

                          setFieldValue("referral", value);
                        }}
                        onBlur={handleBlur}
                        name="referral"
                        inputStatus={
                          errors.referral && touched.referral
                            ? 'error' : !errors.referral && touched.referral 
                            ? 'success' : undefined
                          }
                        errorMessage={errors.referral && touched.referral && errors.referral}
                        isDisabled={false}
                      />
                    </Row>
                    <BtnContainer>
                      <Button text="Sign up" color="gradient" type="submit" loading={loading} />
                      <div className={'alreadyBox'}>
                        Already have an account? <Link to="/login">Log in</Link>
                      </div>
                    </BtnContainer>
                  </form>
                )}
              </Formik>
            </FormWrapp>
          </WrappForm>
        )}
      </Wrapp>
      <BoxImgLeft />
      <BoxImgRight />
      <MainFooter />
    </SplashFinishedContainer>
  )
}

SplashFinishedView.propTypes = {
  signUpCallback: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

SplashFinishedView.defaultProps = {
  loading: false,
}