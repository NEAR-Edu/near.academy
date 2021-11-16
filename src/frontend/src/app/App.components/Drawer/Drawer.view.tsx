
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import classnames from 'classnames'

import { State } from 'reducers'
// import { PublicUser } from 'pages/Course/Course.data'
import { PublicUser } from 'shared/user/PublicUser'

import { ChapterData } from '../../../pages/Chapter/Chapter.controller'
import { chaptersByCourse } from '../../../pages/Course/Course.data'
import { Button } from '../Button/Button.controller'
import { MainFooter } from '../MainFooter/MainFooter.controller'
// PLACEHOLDER.
import { Option } from '../Select/Select.view'
import { DrawerItem, DrawerMask, DrawerStyled } from './Drawer.style'

type ChapterDrawerViewProps = {
  showingChapters: boolean
  hideCallback: () => void
  pathname: string
  changeCourseCallback: (e: Option) => void
  activeCourse: Option,
  user?: PublicUser
}

type LoggedInDrawerViewProps = {
  showingMenu: boolean
  user: PublicUser
  removeAuthUserCallback: () => void
}

type LoggedOutDrawerViewProps = {
  showingMenu: boolean
}

export const ChapterDrawerView = ({
  user,
  showingChapters,
  hideCallback,
  pathname,
  activeCourse,
  changeCourseCallback,
}: ChapterDrawerViewProps) => {
  const progressUserChapter = useSelector((state: State) => state.progressChapter.progressUserChapter)
  return (
    <>
      <DrawerMask className={`${showingChapters}`} onClick={() => hideCallback()} />
      <DrawerStyled className={`${showingChapters}`}>
        <div className={'top'}>
          <div className={'arrow-box'} onClick={() => hideCallback()}>
            <img src="/images/sideMenu/arrow.svg" alt="" />
          </div>
          <div className={'name-box'} />
        </div>
        <div className={'logo-sideMenu'}>
          <img src="/images/sideMenu/logo.png" alt="" />
        </div>
        <div className={'title-box'}>
          <h1 className={'title'}>Chapters</h1>
        </div>
        
  
        {/* <Select
          options={[
            { name: 'Near101', path: 'near101' },
            { name: 'Near102', path: 'near102' },
          ]}
          defaultOption={activeCourse}
          selectCallback={(e) => changeCourseCallback(e)}
        /> */}
        <div className={classnames(user && 'isAuth')}>
          {chaptersByCourse[activeCourse.path].map((chapter: ChapterData, key: number) => {
            let done = false;

            if (user) {
              done = user.progress ? user.progress.indexOf(chapter.pathname) >= 0 : false;
            } else if (progressUserChapter.length) {
              done = progressUserChapter.indexOf(chapter.pathname) >= 0
            }
            return (
              <DrawerItem key={chapter.pathname} className={pathname === chapter.pathname ? 'current-path' : 'other-path'}>
                <Link className={classnames(done && 'checked')} to={chapter.pathSplash} onClick={() => hideCallback()}>
                  <span className={'number'}>{key + 1}</span>
                  <span className={'name-link'}>{chapter.name}</span>
                </Link>
              </DrawerItem>
            )
          })}
        </div>
        

        {!user ? (
          <div className={'btn-items'}>
            <div className={'btn-item'}>
              <Link to="/sign-up">
                <Button text="Sign up for free" color="gradient" onClick={() => hideCallback()} />
              </Link>
            </div> 
            <div className={'btn-item'}>
              <Link to="/login">
                <Button text="Log in" color="primary" onClick={() => hideCallback()} />
              </Link>
            </div> 
          </div>
        ) : null}
  
        <MainFooter mobileFooter hideCallback={hideCallback} />
      </DrawerStyled>
    </>
  )
}


ChapterDrawerView.propTypes = {
  showingChapter: PropTypes.bool,
  hideCallback: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  changeCourseCallback: PropTypes.func.isRequired,
  activeCourse: PropTypes.object.isRequired,
}

ChapterDrawerView.defaultProps = {
  showingChapter: false,
}