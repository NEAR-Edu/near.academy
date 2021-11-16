import { ADD_LOCAL_PROGRESS } from './../pages/Chapter/Chapter.actions';

export interface ProgressChapterState {
  progressUserChapter: string[]
}

const progressChapterDefaultState: ProgressChapterState = {
  progressUserChapter: [],
}

export function progressChapter(state = progressChapterDefaultState, action: any): ProgressChapterState {
  switch (action.type) {
    case ADD_LOCAL_PROGRESS: {
      const prevState = [...state.progressUserChapter]
      if (prevState.indexOf(action.payload.chapterDone) === -1) {
        prevState.push(action.payload.chapterDone);
      }
      return {
        progressUserChapter: prevState,
      }
    }
    default:
      return state
  }
}