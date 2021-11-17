import styled from 'styled-components/macro'
import { backgroundColorLight, FadeInFromTop, primaryColor, subTextColor, textColor, textColorBlue, textColorMenuItemNumber, textColorWhite } from 'styles'

export const UserStyled = styled.div`
  max-width: 1014px;
  margin: 0 auto;
`

export const ExternalLink = styled.span`
  text-decoration: underline;
  &:hover {
    color: ${primaryColor}
  }
`

export const UserTitle = styled(FadeInFromTop)`
  color: white;

  h1 {
    margin: 0;
    width: 100%;
    font-weight: bold;
    font-size: 38px;
    line-height: 47px;
    display: block;
  }
  

  @media (max-width: 1200px) {
    h1 {
      font-size: 24px;
      line-height: 31px;
      text-align: center;
      max-width: 332px;
      margin: 0 auto;
    }
  }
`

export const InnerContainer = styled.div`
  margin-top: 61px;
  padding: 0 24px;

  @media (max-width: 1200px) {
    margin-top: 45px;
  }
  @media (max-width: 998px) {
    margin: 45px auto 0;
  }
`
export const TopInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 36px;
  border-bottom: 2px solid rgba(255, 255, 255, .2);

  @media (max-width: 1200px) {
    flex-direction: column;
    padding-bottom: 44px;
  }
`
export const BoxImgLogo = styled.div`
  background-image: url('/images/Account/logo.png');
  background-repeat: no-repeat;
  background-position: center center;
  width: 260px;
  height: 89px;
`
export const BoxText = styled.div`
  font-family: 'DM Mono', monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 25px;
  max-width: 500px;
  color: ${textColorWhite};

  @media (max-width: 1200px) {
    margin-top: 26px;
    text-align: center;
  }
  @media (max-width: 998px) {
    max-width: 333px;
  }
`
export const BottomInnerContainer = styled.div`
  padding-top: 31px;
  padding-bottom: 86px;
  color: ${textColorWhite};
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`
export const ChaptersContainer = styled.div`
  max-width: 360px;
  width: 100%;

  .title-box {
    margin-bottom: 10px;
    .title {
      font-weight: bold;
      font-size: 24px;
      line-height: 36px;
      margin: 0;
    }
  }

  @media (max-width: 1200px) {
    margin-bottom: 64px;
  }
`
export const Item = styled.div`
  & + & {
    margin-top: 10px;
  }
  > a {
    font-weight: bold;
    line-height: 24px;
    display: flex;
    width: 100%;
    position: relative;
    padding: 10px 0;

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
      font-size: 16px;
      line-height: 19px;
      margin-right: 15px;
      color: ${textColorMenuItemNumber};
    }

    .name-link {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: ${textColorWhite};
    }

    @media (max-width: 992px) {
      border-bottom: 1px solid #E2E8F0;
    }
  }
`
export const CertificateContainer = styled.div`
  max-width: 492px;
  width: 100%;
  height: 370px;
  @media (max-width: 1200px) {
    margin-top: 40px;
    height: 100%;
  }
`
export const NotCompleteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border: 1px dashed #64748B;
  box-sizing: border-box;
  border-radius: 12px;
  height: 100%;
  text-align: center;
  font-size: 21px;
  line-height: 28px;
  color: ${textColor};

  @media (max-width: 1200px) {
    height: 250px;
    margin: 0 auto 35px;
    max-width: 334px;
    width: 100%;
  }
`
export const UserNameContainer = styled.div`
  padding: 50px 20px;
  box-sizing: border-box;
  border-radius: 12px;
  height: 100%;
  color: ${textColor};
  background-color: ${backgroundColorLight};

  .wrapp {
    max-width: 368px;
    width: 100%;
    margin: 0 auto;
  }

  .title {
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
    color: ${subTextColor};
    max-width: 363px;
    margin: 0 auto;

    @media (max-width: 992px) {
      font-size: 19px;
      line-height: 25px;
      max-width: 276px;
    }
  }

  .box-input {
    margin-top: 38px;

    @media (max-width: 992px) {
      margin-top: 19px;
    }
  }

  @media (max-width: 1200px) {
    margin-bottom: 42px;
  }
  @media (max-width: 992px) {
    padding: 23px 22px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  .download {
    button {
      width: 138px;
      height: 50px;
      background: ${textColorBlue};
    }
  }
  .certificateUrl {
    button {
      width: 138px;
      height: 50px;
      background: ${textColorBlue};
    }
  }
  .issue {
    button {
      width: 142px;
      height: 50px;
    }
  }
  .pNFT {
    max-width: 150px;
    a {
      margin-left: 5px;
    }
    @media (max-width: 576px) {
      max-width: 100%;
      margin: 0 auto;
    }
  }

  @media (max-width: 1200px) {
    margin-bottom: 42px;
  }

  @media (max-width: 576px) {
    flex-wrap: wrap;
    gap: 19px;

    .issue {
      display: flex;
      justify-content: center;
      width: 100%;
      button {
        width: 142px;
        height: 50px;
      }
    }
  }
`
export const BtnContainer = styled.div`
  max-width: 232px;
  margin: 35px auto 0;

  button {
    width: 100%;
    padding: 14px 27px;
  }

  @media (max-width: 576px) {
    margin: 30px auto 0;
    button {
      font-size: 18px;
      line-height: 27px;
    }
  }
`

export const UserBadge = styled.div<{ badgeUnlocked: boolean }>`
  height: 100%;
  width: 100%;
`

export const CertificateItself = styled.div`
  position: relative;
  border-radius: 15px;
  width: 495px;
  height: 354px;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }

  > div {
    font-size: 17px;
    width: 100%;
    left: 0px;
    color: #282640;
    position: absolute;
    text-align: center;
    top: 51%;
  }

  @media (max-width: 768px) {
    width: 327px;
    height: 234px;
    margin: 0 auto;

    > div {
      font-size: 14px;
    }
  }
`

export const AccountNameInput = styled.div`
  padding-top: 15px !important;
`

export const UserBadgeButtons = styled.div`

`
