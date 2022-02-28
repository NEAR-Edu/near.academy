export const SHOW_CHAPTER_DRAWER = 'SHOW_CHAPTER_DRAWER'
export const HIDE_CHAPTER_DRAWER = 'HIDE_CHAPTER_DRAWER'

export const showChapterDrawer = () => (dispatch: any) => {
  dispatch({
    type: SHOW_CHAPTER_DRAWER,
  })
}

export const hideChapterDrawer = () => (dispatch: any) => {
  dispatch({
    type: HIDE_CHAPTER_DRAWER,
  })
}

