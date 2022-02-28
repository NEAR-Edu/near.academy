import * as React from 'react'

import { ProgressStyled, ProgressBarWrapper } from './Progress.style'

export const ProgressView = ({ percent }: any) => {
  return (
    <ProgressStyled>
      <ProgressBarWrapper percent={percent} />
    </ProgressStyled>
  )
}
