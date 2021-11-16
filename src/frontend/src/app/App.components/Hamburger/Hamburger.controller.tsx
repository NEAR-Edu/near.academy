import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { HamburgerViewLeft } from './Hamburger.view'
import { showChapterDrawer, hideChapterDrawer } from '../Drawer/Drawer.actions'
import { State } from 'reducers'

type HamburgerLeftProps = {
  authPage?: boolean
}

export const HamburgerLeft = ({ authPage }: HamburgerLeftProps) => {
  const dispatch = useDispatch()
  const activated = useSelector((state: State) => state.chapterDrawer.showingChapter)

  const activateCallback = () => {
    dispatch(activated ? hideChapterDrawer() : showChapterDrawer())
  }

  return <HamburgerViewLeft activated={activated} activateCallback={activateCallback} authPage={authPage} />
}

