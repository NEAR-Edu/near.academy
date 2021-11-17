import * as React from 'react'
import { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { ga } from 'react-ga'

import LogRocket from 'logrocket';
import { ConnectedRouter } from 'connected-react-router'

import { ChapterDrawer, /* LoginDrawer */ } from './App.components/Drawer/Drawer.controller'
/* import { Gdpr } from './App.components/Gdpr/Gdpr.controller' */
/* import { HamburgerLeft } from './App.components/Hamburger/Hamburger.controller' */
/* import { Header } from './App.components/Header/Header.controller' */
import { ProgressBar } from './App.components/ProgressBar/ProgressBar.controller'
import { Toaster } from './App.components/Toaster/Toaster.controller'
// import { Toaster } from './App.components/Toaster/Toaster.controller'
import { history } from './App.store'
import { AppBg } from './App.style'
import { AppView } from './App.view'
import { State } from 'reducers'

const LOG_ROCKET_PROJECT_ID = 'near/nearacademy'

LogRocket.init(LOG_ROCKET_PROJECT_ID);

LogRocket.getSessionURL(function (sessionURL) {
  ga('send', {
    hitType: 'event',
    eventCategory: 'LogRocket',
    eventAction: sessionURL,
  });
});

export const App = () => {
  const user = useSelector((state: State) => state.auth.user)

  useEffect(() => {
    
    if (user && user.name) {
      LogRocket.identify(LOG_ROCKET_PROJECT_ID, {
        name: user.name,
      })
    }
  }, [user])

  return (
    <ConnectedRouter history={history}>
      <AppBg>
        {/* <Header /> */}
        <ChapterDrawer />
        {/* <HamburgerLeft /> */}
        {/* <LoginDrawer /> */}
        <AppView />
        <Toaster />
        <ProgressBar />
        {/* <Gdpr /> */}
      </AppBg>
    </ConnectedRouter>
  )
}
