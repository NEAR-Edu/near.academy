import styled from 'styled-components/macro'

import { bgTextColor, backgroundColorLight, primaryColor, textColorMenuItem, backgroundColorChapter } from 'styles'

export const HeaderStyled = styled.div`
  position: relative;
  text-align: center;
  height: 70px;
  background-color: ${backgroundColorLight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 46px;

  &.inChapter {
    @media (max-width:600px) {
      border-bottom: 1px solid #E3E3E3;
    }
  }
  &.authPage {
    background-color: transparent;
  }

  @media (max-width: 1130px) {
    padding-left: 20px;
  }
`

export const LeftContainer = styled.div`
  display: flex;
`

export const HeaderLogo = styled.img`
  padding: 0px;
  margin: auto;
  @media (max-width: 450px) {
    max-width: 200px;
  }
`

export const HeaderLoggedOut = styled.div`
  .nav-wrapp {
    display: flex;
    align-items: center;
  }

  .inChapter {
    display: none;
  }

  .authPage {
    display: none;
  }

  

  @media (max-width: 1130px) {
    display: none;
  }
  
  .get-started { 
    display: flex;
    align-items: center;
    
    button {
      height: 40px;
      padding: 0px 20px; 
      font-size: 16px;
      margin-right: 20px;
    }
  }
`

export const HeaderLoggedIn = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  text-transform: uppercase;
  transform: translate(0, -50%);

  .nav-wrapp {
    display: flex;
    align-items: center;
  }

  @media (max-width: 1130px) {
    display: none;
  }
`

export const HeaderMenuItem = styled.div`
  position: relative;
  color: ${textColorMenuItem};
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
  padding: 0 20px;

  &.login {
    background-color: ${primaryColor};
    color: ${bgTextColor};
    width: 128px;
    display: grid;
    grid-template-columns: auto 50px;
    text-align: right;

    > div {
      line-height: 50px;
    }

    > svg {
      height: 28px;
      width: 28px;
      margin: 11px;
      stroke: ${bgTextColor};
    }
  }

  @media (max-width: 1440px) {
    padding: 0 10px;
  }
`
