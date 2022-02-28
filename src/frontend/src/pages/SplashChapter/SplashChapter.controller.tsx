import * as React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { CourseData } from '../Course/Course.controller'
import { chaptersByCourse, courseData } from '../Course/Course.data'
import { ChapterData, Data } from 'pages/Chapter/Chapter.controller'

import { SplashChapterView } from './SplashChapter.view'


export const Splash = () => {
  const { pathname } = useLocation()
  const [data, setData] = useState<Data>({
    course: undefined,
    splash: undefined,
    exercise: undefined,
    solution: undefined,
    supports: {},
    questions: [],
  })

  useEffect(() => {
    /* if (user) dispatch(getUser({ username: user.username })) */

    courseData.forEach((course: CourseData) => {
      const index = course.path!

      chaptersByCourse[index].forEach((chapter: ChapterData) => {
        if (pathname === chapter.pathSplash)
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

  return (
    <>
      {data.splash && (
          <SplashChapterView splash={data.splash} pathname={pathname} />
        )}
    </>
  )
}