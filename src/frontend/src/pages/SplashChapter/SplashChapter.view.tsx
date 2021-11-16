import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'

import Markdown from 'markdown-to-jsx'
import { ButtonContainer, CloseBtn, SplashContainer, SplashContentWrapp, ChapterH1, Spacer, ContentWrapp } from './SplashChapter.style'
import { Button } from 'app/App.components/Button/Button.controller'


type SplashChapterViewProps = {
  splash: string
  pathname: string
}

const Content = ({ splash }: any) => (
  <Markdown
    children={splash}
    options={{
      // disableParsingRawHTML: true,
      overrides: {
        h1: {
          component: ChapterH1,
        },
        Spacer: {
          component: Spacer,
        },
        ContentWrapp: {
          component: ContentWrapp,
        },
      },
    }}
  />
)

export const SplashChapterView = ({ splash, pathname }: SplashChapterViewProps) => {
  const history = useHistory()

  return (
    <SplashContainer>
      <CloseBtn onClick={() => history.push(`/near101/chapter-${pathname.slice(-1)}`) } />
      <SplashContentWrapp>
        <Content splash={splash || ''} />
      </SplashContentWrapp>
      <ButtonContainer>
        {pathname === '/near101/splash-1' ? (
          <Link to="/near101/chapter-1">
            <Button text="Begin" color="gradient" />
          </Link>
        ) : (
          <Link to={`/near101/chapter-${pathname.slice(-1)}`}>
            <Button text="Proceed" color="gradient" />
          </Link>
        )}
      </ButtonContainer>
      
    </SplashContainer>
  )
}

SplashChapterView.propTypes = {
  splash: PropTypes.string,
}

SplashChapterView.defaultProps = {
  splash: '',
}