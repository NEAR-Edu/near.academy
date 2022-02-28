import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

import { recaptchaRequest } from 'app/App.actions'

import { SignUpInputs } from 'shared/user/SignUp'
import { signUp } from '../SignUp/SignUp.actions'

import { showToaster } from '../../app/App.components/Toaster/Toaster.actions'
import { ERROR } from '../../app/App.components/Toaster/Toaster.constants'

import { SplashFinishedView } from './SplashFinished.view'

import { State } from 'reducers'

export const SplashFinished = () => {
  const user = useSelector((state: State) => state.auth.user)
  const dispatch = useDispatch()
  const { executeRecaptcha } = useGoogleReCaptcha()

  const loading = useSelector((state: State) => state.loading)

  const signUpCallback = async (signUpInputs: SignUpInputs) => {
    dispatch(recaptchaRequest())
    
    if (!executeRecaptcha) {
      dispatch(showToaster(ERROR, 'Recaptcha not ready', 'Please try again'))
      return
    }
    const recaptchaToken = await executeRecaptcha('signup')

    dispatch(signUp({ ...signUpInputs, recaptchaToken }))
  }
  return (
    <SplashFinishedView user={user} loading={loading} signUpCallback={signUpCallback} />
  )
}