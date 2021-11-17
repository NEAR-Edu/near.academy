import styled from 'styled-components/macro'

import { backgroundColorLight, textColorMenuItem, textColorWhite } from 'styles'

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
  color: ${textColorWhite};

  &.inChapter {
    @media (max-width:600px) {
      border-bottom: 1px solid #E3E3E3;
    }
  }
  &.authPage {
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    
    @media (max-width: 1200px) {
      border-bottom: 1px solid rgba(255,255,255, .2);
    }
  }

  @media (max-width: 1130px) {
    padding-left: 20px;
    padding-right: 20px;
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
  .nav-wrapp {
    display: flex;
    align-items: center;
  }

  .inChapter {
    display: none;
  }

  .accountPage {
    display: flex;
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

  &.accountPage {
    color: ${textColorWhite};
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    @media (max-width: 992px) {
      display: none;
    }
  }

  @media (max-width: 1440px) {
    padding: 0 10px;
  }
`
