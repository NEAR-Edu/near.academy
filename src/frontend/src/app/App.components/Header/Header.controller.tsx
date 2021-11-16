import * as React from 'react'
import * as PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { State } from 'reducers'
import { logout } from 'pages/Login/Login.actions'

import { HeaderView } from './Header.view'

interface IHeader {
  inChapter?: boolean,
  authPage?: boolean,
  accountPage?: boolean,
}

export const Header = ({ inChapter, authPage, accountPage }: IHeader) => {
  const dispatch = useDispatch()
  const user = useSelector((state: State) => state.auth.user)

  function removeAuthUserCallback() {
    dispatch(logout())
  }

  return <HeaderView
    user={user}
    removeAuthUserCallback={removeAuthUserCallback}
    inChapter={inChapter}
    authPage={authPage}
    accountPage={accountPage}
  />
}

Header.propTypes = {
  inChapter: PropTypes.bool,
  authPage: PropTypes.bool,
};
