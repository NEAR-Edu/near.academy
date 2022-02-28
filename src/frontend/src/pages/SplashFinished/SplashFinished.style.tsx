import styled from 'styled-components/macro'
import { backgroundColorChapter, textColor, near3, textColorGreen, textColorWhite } from 'styles'

export const SplashFinishedContainer = styled.div`
  background-image: url('/images/splash/nice_bg.png');
  background-repeat: no-repeat;
  background-position: top;
  background-color: ${backgroundColorChapter};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  &.isUser {
    min-height: 100vh;
  }
`
export const EmptyBlock = styled.div``

export const BoxImgLeft = styled.div`
  position: absolute;
  bottom: 99px;
  left: 20%;
  transform: translate(-50%, 0);
  width: 308px;
  height: 637px;
  background-image: url('/images/splash/man-left.png');
  background-repeat: no-repeat;
  background-position: center bottom;

  @media (max-width: 1200px) {
    width: 214px;
    height: 441px;
    background-size: contain;
    left: 50%;
    bottom: 396px;
    transform: translate(-50%, 23%);
  }
`
export const BoxImgRight = styled.div`
  position: absolute;
  bottom: 99px;
  right: 20%;
  transform: translate(60%, 0);
  width: 215px;
  height: 445px;
  background-image: url('/images/splash/man-right.png');
  background-repeat: no-repeat;
  background-position: center bottom;

  @media (max-width: 1200px) {
    display: none;
  }
`
export const Wrapp = styled.div`
  max-width: 430px;
  margin: 140px auto 0;

  @media (max-width: 1200px) {
    margin: 114px auto 0;
  }
`
export const BoxLogo = styled.div`
  background-image: url('/images/splash/logo.png');
  background-repeat: no-repeat;
  background-position: center center;
  width: 350px;
  height: 125px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    background-image: url('/images/splash/miniLogoWhite.png');
    width: 225px;
    height: 75.69px;
  }
`
export const Title = styled.div`
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: ${textColorGreen};
  margin-top: 50px;

  @media (max-width: 1200px) {
    font-size: 36px;
    line-height: 58px;
    margin-top: 24px;
  }
`
export const WrappForm = styled.div`
  margin-top: 20px;
  padding: 0 20px;

  @media (max-width: 1200px) {
    margin-top: 28px;
  }
`
export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: ${textColorWhite};

  @media (max-width: 1200px) {
    font-size: 21px;
    line-height: 28px;
  }
`
export const FormWrapp = styled.div`
  margin-top: 50px;

  @media (max-width: 1200px) {
    margin-top: 24px;
  }
`
export const Row = styled.div`
  margin-top: 20px;

  @media (max-width: 1200px) {
    margin-top: 19px;
  }
`
export const BtnContainer = styled.div`
  margin-top: 43px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 121px;

  @media (max-width: 1200px) {
    margin-top: 43px;
    margin-bottom: 468px;
  }

  button {
    width: 185px;
    height: 62px;
  }

  .alreadyBox {
    margin-top: 22px;
    font-size: 15px;
    line-height: 22px;
    color: ${textColor};

    a {
      margin-left: 2px;
      color: ${near3};
    }
  }

  &.isUser {
    @media (max-width: 1200px) {
      margin-top: 26px;
      margin-bottom: 468px;
    }
    button {
      width: 100%;
      height: 60px;
    }
  }
  
`