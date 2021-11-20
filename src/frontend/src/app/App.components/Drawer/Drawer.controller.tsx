import * as React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { State } from 'reducers'
import { Option } from '../Select/Select.view'

import { hideChapterDrawer } from './Drawer.actions'
import { ChapterDrawerView } from './Drawer.view'

import { logout } from 'pages/Login/Login.actions'

export const ChapterDrawer = () => {
  const dispatch = useDispatch()
  const showingChapter = useSelector((state: State) => state.chapterDrawer && state.chapterDrawer.showingChapter)
  const user = useSelector((state: State) => state.auth.user)
  const { pathname } = useLocation()

  let defaultCourse: Option = { name: 'Near 101', path: 'near101' }
  const [activeCourse, setActiveCourse] = useState(defaultCourse)

  function changeCourseCallback(e: Option) {
    if (e.path === 'near101') {
      setActiveCourse({ name: 'Near 101', path: 'near101' })
    }
    if (e.path === 'near102') {
      setActiveCourse({ name: 'Near 102', path: 'near102' })
    }
  }

  function removeAuthUserCallback() {
    dispatch(logout())
  }

  const hideCallback = () => {
    dispatch(hideChapterDrawer())
  }

  return (
    <ChapterDrawerView
      user={user}
      showingChapters={showingChapter}
      hideCallback={hideCallback}
      pathname={pathname}
      activeCourse={activeCourse}
      changeCourseCallback={changeCourseCallback}
      removeAuthUserCallback={removeAuthUserCallback}
    />
  )
}
