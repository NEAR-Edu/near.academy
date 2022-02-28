/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import course from '!raw-loader!./course.md'
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import splash from '!raw-loader!./splash.md'

import { Data } from 'pages/Chapter/Chapter.controller'
import { questions } from './questions'

export const data: Data = { 
    course, 
    splash,
    exercise: undefined, 
    solution: undefined, 
    supports: {}, 
    questions 
}
