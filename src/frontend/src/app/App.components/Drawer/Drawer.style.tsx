import styled from 'styled-components/macro'
import { primaryColor, textColor, backgroundColorLight, subTextColor, textColorMenuItemNumber } from 'styles'

export const DrawerMask = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.2s ease-in-out;

  &.true {
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
    background-color: black;
  }
`

export const DrawerStyled = styled.div`
  position: fixed;
  top: 0;
  left: -1px;
  height: 100vh;
  z-index: 10;
  max-width: 370px;
  width: 100%;
  padding: 40px 0 0 0;
  background-color: ${backgroundColorLight};
  box-shadow: 1px 7px 14px -5px rgba(0, 0, 0, 0.2);
  transform: translate3d(-370px, 0, 0);
  transition: 0.2s ease-in-out;
  will-change: transform;
  overflow: scroll;

  &.true {
    transform: translate3d(0px, 0, 0);
  }

  &.false {
    transform: translate3d(-370px, 0, 0);
  }

  .top {
    display: flex;
    align-items: center;
    max-height: 25px;
    height: 100%;
    padding-left: 30px;
    padding-right: 20px;
    padding-bottom: 30px;
    border-bottom: 1px solid #E3E3E3;

    .arrow-box {
      margin-right: 18px;
      cursor: pointer;
    }

    .name-box {
      background-image: url('/images/sideMenu/nearAcademy.svg');
      background-repeat: no-repeat;
      background-position: center center;
      width: 156px;
      height: 25px;
    }
  }

  .logo-sideMenu {
    margin-top: 44px;
    display: flex;
    justify-content: center;
  }

  .title-box {
    margin-top: 42px;
    padding-left: 30px;
    .title {
      margin: 0;
      color: ${subTextColor};
      font-weight: bold;
      font-size: 24px;
      line-height: 36px;
    }
  }

  .btn-items {
    max-width: 320px;
    width: 100%;
    margin: 30px auto;
    text-align: center;

    .btn-item + .btn-item {
      margin-top: 20px;
    }

    button {
      padding: 12px 0;
    }
  }
`

export const DrawerItem = styled.div`
  margin-top: 10px;
  > a {
    font-weight: bold;
    line-height: 24px;
    display: flex;
    width: 100%;
    position: relative;
    padding: 11px 30px 11px 20px;
    border-bottom: 1px solid #E2E8F0;

    &.checked {
      &::after {
        content: '';
        width: 20px;
        height: 16px;
        background-image: url('/images/sideMenu/checked.svg');
        background-repeat: no-repeat;
        background-size: 20px 16px;
        right: 21px;
        position: absolute;
      }
    }

    .number {
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      margin-right: 15px;
      color: ${textColorMenuItemNumber};
    }

    .name-link {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: ${subTextColor};
    }
  }

  &.current-path > a {
    color: ${primaryColor};
  }

  > a > svg {
    display: inline-block;
    width: 24px;
    height: 24px;
    stroke: ${textColor};
    fill: ${textColor};
    margin-right: 20px;
  }

  > a > img {
    width: 24px;
    height: 24px;
    margin-right: 20px;
    border-radius: 12px;
  }

  &.current-path > a > svg {
    stroke: ${primaryColor};
  }
`
