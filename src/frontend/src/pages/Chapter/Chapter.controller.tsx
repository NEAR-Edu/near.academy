import * as React from 'react'
import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { State } from 'reducers'

import { CourseData } from '../Course/Course.controller'

import { chaptersByCourse, courseData } from '../Course/Course.data'
import { chapterData } from '../Courses/near101/Chapters/Chapters.data'

import { addLocalProgress, addProgress } from './Chapter.actions'
import { getUser } from 'pages/User/User.actions'

import { PENDING, RIGHT, WRONG } from './Chapter.constants'

import { ChapterView } from './Chapter.view'

import { ChapterLocked } from './Chapter.style'

export interface ChapterData {
  pathname: string
  pathSplash: string
  name: string
  data: Data
}

export type Question = {
  question: string
  selectedText?: string
  answers: string[]
  responses: string[]
  proposedResponses?: string[]
}

export interface Data {
  course: string | undefined
  splash: string | undefined
  exercise: string | undefined
  solution: string | undefined
  supports: Record<string, string | undefined>
  questions: Question[]
}

export const Chapter = () => {
  const [validatorState, setValidatorState] = useState(PENDING)
  const [showDiff, setShowDiff] = useState(false)
  const { pathname } = useLocation()
  const [data, setData] = useState<Data>({
    course: undefined,
    splash: undefined,
    exercise: undefined,
    solution: undefined,
    supports: {},
    questions: [],
  })
  const dispatch = useDispatch()
  const user = useSelector((state: State) => state.auth.user)
  let previousChapter = '/'
  let nextChapter = '/'
  let percent = 0

  let badgeUnlocked = false
  let counter = 0
  user?.progress?.forEach((chapter) => {
    counter++
  })
  if (counter >= 20) badgeUnlocked = true


  useEffect(() => {
    if (user) dispatch(getUser({ username: user.username }))

    courseData.forEach((course: CourseData) => {
      const index = course.path!

      chaptersByCourse[index].forEach((chapter: ChapterData) => {
        if (pathname === chapter.pathname)
          setData({
            course: chapter.data.course,
            splash: chapter.data.splash,
            exercise: chapter.data.exercise,
            solution: chapter.data.solution,
            supports: chapter.data.supports,
            questions: chapter.data.questions.map((question) => {
              return { ...question, proposedResponses: [] }
            }),
          })
      })
    })
  }, [pathname])


  chapterData.forEach((chapter, i) => {
    if (pathname === chapter.pathname) {
      if (i - 1 >= 0) previousChapter = chapterData[i - 1].pathname
      percent = 0
      if (i + 1 < chapterData.length) {
        nextChapter = chapterData[i + 1].pathSplash
      } else {
        if (user) nextChapter = `/user/${user.username}`
        else nextChapter = '/finished'
      }
      if (i !== 7) percent = ((i + 1) / chapterData.length) * 100
      else percent = 100
    }
  })

  const validateCallback = () => {
    if (pathname === '/near101/chapter-8') {
      setValidatorState(RIGHT)
      if (user) dispatch(addProgress({ chapterDone: pathname }))
      else dispatch(addLocalProgress({ chapterDone: pathname }))
      /* setIsPopup(true) */
      return
    }

    if (data.questions.length > 0) {
      let ok = true
      data.questions.forEach((question) => {
        if (!question.proposedResponses) ok = false
        else {
          question.responses.forEach((response) => {
            if (!(question.proposedResponses && question.proposedResponses.indexOf(response) >= 0)) ok = false
          })
          question.proposedResponses.forEach((proposedResponse) => {
            if (!(question.responses.indexOf(proposedResponse) >= 0)) ok = false
          })
        }
        if (question.responses.length === 0) ok = true
      })
      if (ok) {
        setValidatorState(RIGHT)
        /* setIsPopup(true) */
        if (user) dispatch(addProgress({ chapterDone: pathname }))
        else dispatch(addLocalProgress({ chapterDone: pathname }))
        /* else dispatch(showToaster(SUCCESS, 'Register to save progress', 'and get your completion certificate')) */
      } else {
        if (showDiff) {
          const [propsQuestions] = data.questions;

          setData({
            ...data,
            questions: [{...propsQuestions, proposedResponses: []}],
          })
          setShowDiff(false)
          setValidatorState(PENDING)
        } else {
          setShowDiff(true)
          setValidatorState(WRONG)
        }
      }
    } else {
      if (showDiff) {
        setShowDiff(false)
        setValidatorState(PENDING)
      } else {
        setShowDiff(true)
        if (data.exercise && data.solution) {
          if (
            // @ts-ignore
            data.exercise.replace(/\s+|\/\/ Type your solution below/g, '') ===
            // @ts-ignore
            data.solution.replace(/\s+|\/\/ Type your solution below/g, '')
          ) {
            setValidatorState(RIGHT)
            if (user) dispatch(addProgress({ chapterDone: pathname }))
            else dispatch(addLocalProgress({ chapterDone: pathname }))
          } else if (pathname === '/near101/chapter-3' && data.exercise.match(/^[a-z0-9_-]*.testnet/gm)) {
            setShowDiff(false)
            setValidatorState(RIGHT)
            if (user) dispatch(addProgress({ chapterDone: pathname }))
            else dispatch(addLocalProgress({ chapterDone: pathname }))
          } else setValidatorState(WRONG)
        } else setValidatorState(WRONG)
      }
    }
  }

  const proposedSolutionCallback = (e: string) => {
    // @ts-ignore
    setData({ ...data, exercise: e })
  }

  const proposedQuestionAnswerCallback = (e: Question[]) => {
    // @ts-ignore
    setData({ ...data, questions: e })
  }

  // ts
  // console.log(`[Chapter.controller.tsx] pathname = ${pathname}`)
  // console.log(`[Chapter.controller.tsx] !badgeUnlocked = ${!badgeUnlocked}`)
  // console.log(`[Chapter.controller.tsx] Chapter locked? ${pathname === '/near101/chapter-24' && !badgeUnlocked}`)
  return (
    <>
      {pathname === '/near101/chapter-24' && !badgeUnlocked ? (
        <ChapterLocked>Chapter locked. Please complete all previous chapters to see this chapter.</ChapterLocked>
      ) : (
        data.course && (
          <ChapterView
            validatorState={validatorState}
            validateCallback={validateCallback}
            solution={data.solution}
            proposedSolution={data.exercise}
            proposedSolutionCallback={proposedSolutionCallback}
            course={data.course}
            showDiff={showDiff}
            user={user}
            supports={data.supports}
            questions={data.questions}
            nextChapter={nextChapter}
            previousChapter={previousChapter}
            proposedQuestionAnswerCallback={proposedQuestionAnswerCallback}
            percent={percent}
          />
        )
      )}
    </>
  )
}
