import * as React from 'react'
import ReactGA from 'react-ga'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './app/App.controller'
import { configureStore } from './app/App.store'
import { unregister } from './serviceWorker'
import { GlobalStyle } from './styles'
import { hotjar } from 'react-hotjar';
// @ts-ignore
import TagManager from 'react-gtm-module'
import TwitterConvTrkr from "react-twitter-conversion-tracker";

import './styles/fonts.css'

export const store = configureStore({})

ReactGA.initialize('UA-192160338-1')
hotjar.initialize(2383690, 6);

const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GTM_ID
}
TagManager.initialize(tagManagerArgs);

TwitterConvTrkr.init("o6dxd");
TwitterConvTrkr.pageView();


export const Root = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} language="en">
      <GlobalStyle />
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </GoogleReCaptchaProvider>
  )
}

unregister()
