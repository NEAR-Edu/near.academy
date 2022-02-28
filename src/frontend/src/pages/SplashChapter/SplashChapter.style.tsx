import styled from 'styled-components/macro'
import { textColorBlack, textColorWhite } from 'styles'


export const SplashContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: url('/images/splash/bg_transparent.svg');
  background-color: #081d42;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;

  @media (max-width: 998px) {
    display: block;
  }
`

export const CloseBtn = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  background-image: url('/images/splash/close.svg');
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
`
export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  button {
    width: 155px;
    height: 51px;
  }

  @media (max-width: 998px) {
    position: static;
    margin-top: 70px;
    text-align: right;
    margin-bottom: 43px;
  }
`

export const SplashContentWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
  font-family: 'DM Mono', monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: ${textColorWhite};

  @media (max-width: 998px) {
    font-size: 19px;
    margin-top: 79px;
  }
`

export const ChapterH1 = styled.div`
  font-weight: 500;
  font-size: 36px;
  line-height: 47px;
  text-align: center;
  margin-bottom: 39px;

  @media (max-width: 998px) {
    font-size: 33px;
    line-height: 43px;
  }
`
export const ContentWrapp = styled.div`
  display: flex;

  .imgContainer {
    margin-right: 24px;
  }
  .itemsContainer {
    margin-top: 125px;
    max-width: 604px;

    .item-text {
      position: relative;
      font-family: 'Comic Neue';
      font-style: italic;
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
      color: ${textColorBlack};
      padding: 15px 28px 18px 32px;
      background-color: ${textColorWhite};
      border-radius: 30px;

      img {
        margin-bottom: 20px;
      }

      & + .item-text {
        margin-top: 52px;
      }

      &::before {
        content: '';
        position: absolute;
        top: -28px;
        left: 20px;
        width: 50px;
        height: 30px;
        background-image: url('/images/splash/angle.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
      }
    }
  }

  @media (max-width: 998px) {
    flex-direction: column;
    align-items: center;

    .itemsContainer {
      margin-top: 25px;
      max-width: 604px;

      .item-text {
        font-size: 18px;
        line-height: 21px;
        padding: 15px 20px 16px 25px;

        img {
          margin-bottom: 20px;
        }

        & + .item-text {
          margin-top: 40px;
        }

        &::before {
          left: auto;
          right: 40px;
        }
      }
    }
  }
`

export const Spacer = styled.span`
  display: block;
  height: 30px;
`
