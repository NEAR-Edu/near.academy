import { Button } from 'app/App.components/Button/Button.controller'
// band-aid hardcode import. fix later.
// import { chapterData } from 'pages/Courses/near101/Chapters/Chapters.data'
import * as React from 'react'
import { useLocation } from 'react-router-dom'
import ProgressBar from '@ramonak/react-progress-bar'

// import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { FooterStyled, ProgressBarWrapper } from './Footer.style'

export const FooterView = ({ nextChapter, previousChapter, percent }: any) => {
  const { pathname } = useLocation()
  // let previousChapter = '/'
  // let nextChapter = '/'

  // chapterData.forEach((chapter, i) => {
  //   if (pathname === chapter.pathname) {
  //     if (i - 1 >= 0) previousChapter = chapterData[i - 1].pathname
  //     if (i + 1 < chapterData.length) nextChapter = chapterData[i + 1].pathname
  //       else nextChapter = '/thank-you'
  //   }
  // })

  return (
    <FooterStyled>
      <Link to={previousChapter}>
        <Button
          text={pathname !== '/near101/chapter-1' ? 'Previous' : 'Go to Home'}
          color="primary"
          icon="left-arrow"
          invertIcon
        />
      </Link>
      <ProgressBarWrapper>
        <ProgressBar baseBgColor={'#fff'} bgColor={'#00C08B'} completed={percent} />
      </ProgressBarWrapper>
      <Link to={nextChapter}>
        <Button
          text={pathname !== '/near101/chapter-8' ? 'Next' : 'Get certificate'}
          color="primary"
          icon="right-arrow"
        />
      </Link>
    </FooterStyled>
  )
}
