import styled from 'styled-components/macro'
import { progressColor } from 'styles'

export const ProgressStyled = styled.div`
  height: 5px;
  width: 100%;
`
export const ProgressBarWrapper = styled.div<{ percent: number }>`
  width: ${({ percent }) => percent + '%' };
  height: 100%;
  background-color: ${progressColor};
`