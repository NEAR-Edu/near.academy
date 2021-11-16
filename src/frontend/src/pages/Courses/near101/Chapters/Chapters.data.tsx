import { ChapterData } from 'pages/Chapter/Chapter.controller'

import { course } from '..'
import { data as chapter1 } from './Chapter-1'
import { data as chapter2 } from './Chapter-2'
import { data as chapter3 } from './Chapter-3'
import { data as chapter4 } from './Chapter-4'
import { data as chapter5 } from './Chapter-5'
import { data as chapter6 } from './Chapter-6'
import { data as chapter7 } from './Chapter-7'
import { data as chapter8 } from './Chapter-8'

export const chapterData: ChapterData[] = [
  {
    pathname: `/${course.path}/chapter-1`,
    pathSplash: `/${course.path}/splash-1`,
    name: 'Welcome to the Internet of value',
    data: chapter1,
  },
  {
    pathname: `/${course.path}/chapter-2`,
    pathSplash: `/${course.path}/splash-2`,
    name: 'Key concepts of Web3',
    data: chapter2,
  },
  {
    pathname: `/${course.path}/chapter-3`,
    pathSplash: `/${course.path}/splash-3`,
    name: 'What is NEAR?',
    data: chapter3,
  },
  {
    pathname: `/${course.path}/chapter-4`,
    pathSplash: `/${course.path}/splash-4`,
    name: 'NEAR Environment	',
    data: chapter4,
  },
  {
    pathname: `/${course.path}/chapter-5`,
    pathSplash: `/${course.path}/splash-5`,
    name: 'On NEAR Contracts',
    data: chapter5,
  },
  {
    pathname: `/${course.path}/chapter-6`,
    pathSplash: `/${course.path}/splash-6`,
    name: 'Deploy the Meme Contract',
    data: chapter6,
  },
  {
    pathname: `/${course.path}/chapter-7`,
    pathSplash: `/${course.path}/splash-7`,
    name: 'Build Your Interface',
    data: chapter7,
  },
  {
    pathname: `/${course.path}/chapter-8`,
    pathSplash: `/${course.path}/splash-8`,
    name: 'What\'s Next',
    data: chapter8,
  }
]
