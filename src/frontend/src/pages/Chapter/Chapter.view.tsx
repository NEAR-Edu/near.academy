//prettier-ignore
import * as React from 'react'
import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'
import * as PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom'
import { useMediaQuery } from '@react-hook/media-query'
import Editor, { DiffEditor } from '@monaco-editor/react'

import Markdown from 'markdown-to-jsx'

// @ts-ignore
import Highlight from 'react-highlight'

import { Header } from 'app/App.components/Header/Header.controller'
import { Progress } from './Progress/Progress.controller'
import { Checkboxes } from 'app/App.components/Checkboxes/Checkboxes.controller'
import { Dialog } from 'app/App.components/Dialog/Dialog.controller'
import { Popup } from 'app/App.components/Popup/Popup.controller'
import { Button } from '../../app/App.components/Button/Button.controller'
import { ButtonsShowResult } from '../../app/App.components/ButtonsShowResult/ButtonsShowResult.controller'
import { Question } from './Chapter.controller'

import { PublicUser } from 'shared/user/PublicUser'

import { PENDING, RIGHT } from './Chapter.constants'

//prettier-ignore
import {
  ChapterContainer,
  ChapterContentWrapp,
  ChapterCourse,
  ChapterFixed,
  ChapterH1,
  ChapterH2,
  ChapterH3,
  ChapterH4,
  ChapterItalic,
  ChapterLi,
  ChapterQuestions,
  ChapterStyled,
  ChapterTab,
  QuoteContainer,
  MonacoContainer,
  narrativeText,
  Spacer,
  SubTitleMobile,
  TextWrapper,
  VerticalAlign,
  BottomItems,
  Wrapp,
  AnimatedCode,
  BackgroundContainer,
  Difficulty,
  ImageContainer,
  SpecialCode,
  MonacoWrrap,
  Link
} from './Chapter.style'


const MonacoReadOnly = ({ children }: any) => {
  const height = children.split('\n').length * 22
  return (
    <div style={{ marginTop: '10px' }}>
      <Editor
        height={height}
        value={children}
        language="typescript"
        theme="vs-dark"
        options={{
          lineNumbers: "off",
          scrollBeyondLastLine: false,
          minimap: { enabled: false },
          scrollbar: { vertical: 'hidden', verticalScrollbarSize: 0, alwaysConsumeMouseWheel: false },
          folding: false,
          readOnly: true,
          fontSize: 14,
          fontFamily: 'Proxima Nova',
          wordWrap: "on",
        }}
      />
    </div>
  )
}

const MonacoEditor = ({ proposedSolution, proposedSolutionCallback, width, height, fontSize }: any) => {
  return (
    <div>
      <Editor
        height={height ? height : '600px'}
        width={width}
        defaultValue={proposedSolution}
        language="rust"
        theme="vs-dark"
        onChange={(value: string | undefined, ev: any) => proposedSolutionCallback(value)}
        options={{
          lineNumbers: "on",
          scrollBeyondLastLine: false,
          minimap: { enabled: false },
          scrollbar: { vertical: 'hidden', verticalScrollbarSize: 0 },
          folding: true,
          readOnly: false,
          fontSize,
          fontFamily: 'Proxima Nova',
          wordWrap: "on",
        }}
      />
    </div>
  )
}

const MonacoDiff = ({ solution, proposedSolution, height, fontSize }: any) => {
  return (
    <div>
      <DiffEditor
        height={height ? height : '600px'}
        original={proposedSolution}
        modified={solution}
        language="rust"
        // @ts-ignore
        theme="vs-dark"
        options={{
          lineNumbers: "on",
          scrollBeyondLastLine: false,
          minimap: { enabled: false },
          scrollbar: { vertical: 'hidden', verticalScrollbarSize: 0 },
          folding: true,
          readOnly: false,
          fontSize,
          fontFamily: 'Proxima Nova',
          renderSideBySide: false,
          wordWrap: "on",
        }}
      />
    </div>
  )
}

const Content = ({ course }: any) => (
  <Markdown
    children={course}
    options={{
      // disableParsingRawHTML: true,
      overrides: {
        ChapterContainer: {
          component: ChapterContainer,
        },
        QuoteContainer: {
          component: QuoteContainer,
        },
        li: {
          component: ChapterLi
        },
        a: {
          component: Link
        },
        h1: {
          component: ChapterH1,
        },
        h2: {
          component: ChapterH2,
        },
        h3: {
          component: ChapterH3,
        },
        h4: {
          component: ChapterH4,
        },
        code: {
          component: MonacoReadOnly,
        },
        em: {
          component: ChapterItalic,
        },
        AnimatedCode: {
          component: AnimatedCode,
        },
        dialog: {
          component: Dialog,
        },
        Button: {
          component: Button,
        },
        Highlight: {
          component: Highlight,
        },
        Difficulty: {
          component: Difficulty,
        },
        ImageContainer: {
          component: ImageContainer,
        },
        SpecialCode: {
          component: SpecialCode,
        },
        Spacer: {
          component: Spacer,
        },
        narrativeText: {
          component: narrativeText,
        },
        TextWrapper: {
          component: TextWrapper,
        },
        BackgroundContainer: {
          component: BackgroundContainer,
        },
        VerticalAlign: {
          component: VerticalAlign,
        },
        SubTitleMobile: {
          component: SubTitleMobile,
        },
        // FormSevenChapter: {
        //   component: FormSevenChapter
        // }
      },
    }}
  />
)

type ChapterViewProps = {
  validatorState: string
  validateCallback: () => void
  solution: string
  nextChapter: string
  previousChapter: string
  proposedSolution: string
  proposedSolutionCallback: (e: string) => void
  showDiff: boolean
  course?: string
  user?: PublicUser
  supports: Record<string, string | undefined>
  questions: Question[]
  proposedQuestionAnswerCallback: (e: Question[]) => void,
  percent: number
}

export const ChapterView = ({
  validatorState,
  validateCallback,
  solution,
  proposedSolution,
  proposedSolutionCallback,
  course,
  user,
  showDiff,
  supports,
  questions,
  nextChapter,
  previousChapter,
  proposedQuestionAnswerCallback,
  percent
}: ChapterViewProps) => {
  const history = useHistory()
  const [display, setDisplay] = useState('solution')
  const [isShowPopup, setIsShowPopup] = useState<any>(false)
  const matches = useMediaQuery('(max-width: 1400px)')
  const matchesMobile = useMediaQuery('(max-width: 768px)')
  const matchesTablet = useMediaQuery('(max-width: 1300px)')
  const matchesLarge = useMediaQuery('(min-width: 1920px)')

  useEffect(() => {
    
    setTimeout(() => {
      if (nextChapter === '/near101/splash-3' && !user) {
        document.body.style.overflow = "hidden";
        setIsShowPopup(true)
      } else {
        document.body.style.overflow = "scroll";
        setIsShowPopup(false)
      }
    }, 4000)
  }, [nextChapter, user])

  useEffect(() => {
    if (!isShowPopup) {
      document.body.style.overflow = "scroll";
    }
  }, [isShowPopup])

  let extension = '.rs'
  const [objQuestion] = questions;

  const closePopup = () => {
    setIsShowPopup(false)
    localStorage.setItem('popupConfirm', 'true')
  }

  const rootElement = document.getElementById('root') as HTMLElement

  const PopupPortal = ReactDOM.createPortal(
    <Popup
      closePopup={closePopup}
      open={isShowPopup}
    />,
    rootElement,
  )

  const nextStep = () => {
    if (validatorState === RIGHT) {
      history.push(nextChapter)
    }
  }
  const backStep = () => {
    history.push(previousChapter)
  }

  return (
    <div>
      {isShowPopup ? PopupPortal : null}

      <ChapterStyled>
        <ChapterCourse>
          <Header inChapter />
          <Progress percent={percent} />
          <ChapterContentWrapp>
            <Content course={course || ''} />
          </ChapterContentWrapp>
        </ChapterCourse>
        <ChapterFixed>
          {Object.keys(supports).length > 0 && (
            <div>
              <ChapterTab isSelected={display === 'solution'} onClick={() => setDisplay('solution')}>
                Exercice
              </ChapterTab>
              {Object.keys(supports).map((key, index) => (
                <ChapterTab isSelected={display === key} onClick={() => setDisplay(key)}>
                  {`${key}.${extension}`}
                </ChapterTab>
              ))}
            </div>
          )}
          {questions.length > 0 && nextChapter !== '/near101/chapter-8' ? (
            <Wrapp>
              <div>
                <ChapterQuestions>
                  {questions.map((question, i) => (
                    <div key={question.question}>
                      {question.selectedText ? (
                        <h2>{question.question} <span>question.selectedText</span>:</h2>
                      ) : (<h2>{question.question}</h2>)}
                      <Checkboxes
                        items={question.answers}
                        proposedResponses={objQuestion.proposedResponses}
                        onUpdate={(selected) => {
                          const proposedQuestions = questions
                          proposedQuestions[i].proposedResponses = selected
                          proposedQuestionAnswerCallback(proposedQuestions)
                        }}
                      />
                    </div>
                  ))}
                </ChapterQuestions>
              </div>
              <BottomItems>
                <ButtonsShowResult
                  isBack={previousChapter !== '/'}
                  validatorState={validatorState}
                  validateCallback={validateCallback}
                  nextStep={nextStep}
                  backStep={backStep}
                  isQuestions
                />
              </BottomItems>
            </Wrapp>
          ) : (
            <MonacoWrrap>
              <MonacoContainer>
                  <div className={'btnContainer'}>
                    <ButtonsShowResult
                      isBack={previousChapter !== '/'}
                      validatorState={validatorState}
                      validateCallback={validateCallback}
                      nextStep={nextStep}
                      backStep={backStep}
                    />
                  </div>
                  {showDiff ? (
                    <MonacoDiff
                      height={matches? '800px' : '100vh'}
                      fontSize={matchesMobile? 14 : matchesTablet ? 15 : matchesLarge ? 20 : 17}
                      solution={solution}
                      proposedSolution={proposedSolution}
                    />
                  ) : (
                    <MonacoEditor
                      height={matches? '800px' : '100vh'}
                      fontSize={matchesMobile ? 14 : matchesTablet ? 15 : matchesLarge ? 20 : 17}
                      proposedSolution={proposedSolution}
                      proposedSolutionCallback={proposedSolutionCallback}
                    />
                  )}
                </MonacoContainer>
            </MonacoWrrap>
          )}
        </ChapterFixed>
      </ChapterStyled>
    </div>
  )
}

ChapterView.propTypes = {
  validatorState: PropTypes.string,
  validateCallback: PropTypes.func.isRequired,
  showDiff: PropTypes.bool.isRequired,
  solution: PropTypes.string,
  nextChapter: PropTypes.string,
  proposedSolution: PropTypes.string,
  proposedSolutionCallback: PropTypes.func.isRequired,
  course: PropTypes.string,
  supports: PropTypes.object.isRequired,
  questions: PropTypes.array.isRequired,
}

ChapterView.defaultProps = {
  validatorState: PENDING,
  solution: '',
  proposedSolution: '',
}
