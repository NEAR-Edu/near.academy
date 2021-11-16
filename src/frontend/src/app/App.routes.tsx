/**
 * React Dependency
 * **/

import React from 'react'
import { Route, Switch } from 'react-router-dom'

/**
 * Custom Components
 * **/

import { Certificate } from 'pages/Certificate/Certificate.controller'
import { ChangePassword } from 'pages/ChangePassword/ChangePassword.controller'
import { Chapter } from 'pages/Chapter/Chapter.controller'
import { Splash } from 'pages/SplashChapter/SplashChapter.controller'
import { SplashFinished } from 'pages/SplashFinished/SplashFinished.controller'
import { Course } from 'pages/Course/Course.controller'
import { Error404 } from 'pages/Error404/Error404.controller'
import { ForgotPassword } from 'pages/ForgotPassword/ForgotPassword.controller'
import { Home } from 'pages/Home/Home.controller'
import { Login } from 'pages/Login/Login.controller'
import { ResetPassword } from 'pages/ResetPassword/ResetPassword.controller'
import { SignUp } from 'pages/SignUp/SignUp.controller'
import { Terms } from 'pages/Terms/Terms.controller'
import { Invite } from 'pages/Invite/Invite.controller'
import { User } from 'pages/User/User.controller'
import {ThankYou} from "../pages/ThankYou/ThankYou.controller";

import { LayoutAuthView } from './App.components/Layout/LayoutAuth/LayoutAuth.view'
import { LayoutAccountView } from './App.components/Layout/LayoutAccount/LayoutAccount.view'

// import { About } from 'pages/About/About.controller'

export const AppRoutes = ({ location }: any) => (
  <Switch location={location}>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/sign-up">
      <LayoutAuthView>
        <SignUp />
      </LayoutAuthView>
    </Route>
    <Route exact path="/login">
      <LayoutAuthView>
        <Login />
      </LayoutAuthView>
    </Route>
    <Route exact path="/forgot-password">
      <LayoutAuthView>
        <ForgotPassword />
      </LayoutAuthView>
    </Route>
    <Route exact path="/reset-password/:token">
      <ResetPassword />
    </Route>
    <Route exact path="/change-password">
      <ChangePassword />
    </Route>
    <Route path="/*/info">
      <Course />
    </Route>
    <Route path="/*/chapter-*">
      <Chapter />
    </Route>
    <Route path="/*/splash-*">
      <Splash />
    </Route>
    <Route path="/finished">
      <SplashFinished />
    </Route>
    <Route exact path="/user/:username">
      <LayoutAccountView>
        <User />
      </LayoutAccountView>
    </Route>
    <Route exact path="/certificate/:username">
      <Certificate />
    </Route>
    {/* <Route exact path="/about">
      <About />
    </Route> */}
    <Route exact path="/terms">
      <Terms />
    </Route>
    <Route exact path="/thank-you">
      <ThankYou />
    </Route>
      <Route exact path="/invite">
          <Invite />
      </Route>
    <Route>
      <Error404 />
    </Route>
  </Switch>
)
