import styled from 'styled-components/macro'


// prettier-ignore
import { HamburgerBottomBackward, HamburgerBottomForward, HamburgerTopBackward, HamburgerTopForward, textColor, backgroundColorLight } from '../../../styles'

export const HamburgerStyledLeft = styled.div`
  margin-right: 17px;
  height: 17px;
  box-sizing: content-box;
  cursor: pointer;
`

export const HamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 14px;
`

export const HamburgerInner = styled.div`
  position: absolute;
  width: 24px;
  height: 1px;
  border-radius: 1px;
  will-change: transform;
  background-color: ${textColor};
`

export const HamburgerInnerTop = styled(HamburgerInner)<{ authPage?: boolean }>`
  top: 0;
  ${({ authPage }) => authPage && `
    background-color: ${backgroundColorLight};
  `}
  

  &.true {
    animation: ${HamburgerTopForward} 1s linear;
    animation-fill-mode: forwards;
  }

  &.false {
    animation: ${HamburgerTopBackward} 1s linear;
    animation-fill-mode: forwards;
  }
`

export const HamburgerInnerMiddle = styled(HamburgerInner)<{ authPage?: boolean }>`
  ${({ authPage }) => authPage && `
    background-color: ${backgroundColorLight};
  `}
  display: block;
  top: calc(50% - 1px);
`

export const HamburgerInnerBottom = styled(HamburgerInner)<{ authPage?: boolean }>`
  bottom: 1px;
  ${({ authPage }) => authPage && `
    background-color: ${backgroundColorLight};
  `}

  &.true {
    animation: ${HamburgerBottomForward} 1s linear;
    animation-fill-mode: forwards;
  }

  &.false {
    animation: ${HamburgerBottomBackward} 1s linear;
    animation-fill-mode: forwards;
  }
`
