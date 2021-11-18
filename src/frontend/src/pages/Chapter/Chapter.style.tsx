import styled from 'styled-components/macro'

import { backgroundColorChapter, near3, primaryColor, subTextColor, textColor, textColorBlue, textColorWhite } from 'styles'

export const ChapterStyled = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 1400px) {
    flex-direction: column;
  }
`
export const ChapterCourse = styled.div`
  max-width: calc(660px + (960 - 660) * ((100vw - 1300px) / (1920 - 1300)));
  width: 100%;

  @media (max-width: 1300px) {
    max-width: 100%;
  }

  @media (min-width: 1920px) {
    max-width: calc(960px + (960 - 660)*((100vw - 1920px) / (1920 - 960)));
  }

  @media (min-width: 2300px) {
    max-width: calc(960px + (960 - 660)*((100vw - 1820px) / (1820 - 960)))
  }
`
export const ChapterContentWrapp = styled.div`
  max-width: 860px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px 60px;
  font-size: 17px;
  line-height: 25px;
  color: ${textColor};
  box-sizing: border-box;

  pre {
    margin: 19px 0;
    border-radius: 5px;
    p {
      margin: 0;
    }
    .hljs {
      background: #091E44;
      border-radius: 5px;
      padding: 16px 20px;
      font-family: 'DM Mono', monospace;
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 22px;
      color: ${textColorWhite};

      & .hljs-keyword {
        color: ${textColorBlue};
      }
    }
  }


  @media (min-width: 1130px) {
    padding-left: 30px;
  }

  @media (max-width: 998px) {
    padding: 0 20px;
  }
`
export const ChapterContainer = styled.div`
  font-size: 20px;
  line-height: 30px;
  text-transform: uppercase;
  color: ${subTextColor};
  text-align: center;
  margin-top: 48px;

  .imgCheckedBox {
    display: none;
  }

  @media (max-width: 998px) {
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 38px;

    .imgCheckedBox {
      display: block;
      margin-left: 12px;
      width: 25px;
      height: 20px;
      background-image: url('/images/chapter/checked.svg');
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
`
export const QuoteContainer = styled.div`
  display: flex;

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  .quote {
    font-style: italic;
    font-weight: normal;
    font-size: 17px;
    line-height: 25px;
    color: rgba(65, 41, 116,.8);
    width: 100%;
  }

  @media (max-width: 1400px) {
    justify-content: flex-start;

    .quote {
      max-width: 100%;
    }
  }
`
export const ChapterH1 = styled.div`
  margin: 0;
  width: 100%;
  font-weight: bold;
  font-size: 38px;
  line-height: 58px;
  text-align: center;
  color: ${near3};
  margin-top: 13px;

  @media (max-width: 998px) {
    color: ${textColorBlue};
    font-size: 36px;
    line-height: 48px;
  }
`

export const ChapterH2 = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: ${subTextColor};
  margin-top: 41px;
  margin-bottom: 13px;
`

export const ChapterH3 = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: ${subTextColor};
`
export const ChapterH4 = styled.div`
  font-size: 15px;
  line-height: 28px;
  margin: 0;
`

export const ChapterLi = styled.li`
margin-left: 20px;
`
export const Link = styled.a`
color: #2866d8;
cursor: pointer;

&:hover {
  text-decoration: underline;
  color: #4e88f2;
}
`

export const SubTitleMobile = styled(ChapterH3)`
  display: none;

  @media (max-width: 998px) {
    display: block;
    text-align: center;
    margin-bottom: 30px;
  }
`

export const MonacoWrrap = styled.div`
  height: 100%;
`

export const ChapterFixed = styled.div`
  max-width: calc(660px + (960 - 660) * ((100vw - 1400px) / (1920 - 1400)));
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: ${backgroundColorChapter};
  padding-top: 70px;

  @media (min-width: 1920px) {
    max-width: calc(960px + (960 - 660)*((100vw - 1920px) / (1920 - 960)))
  }
  @media (min-width: 2300px) {
    max-width: calc(960px + (960 - 660)*((100vw - 1820px) / (1820 - 960)))
  }

  @media (max-width: 1300px) {
    max-width: 100%;
    margin: 0 auto;
    position: static;
    padding-top: 40px;
  }
`

export const ChapterQuestions = styled.div`
  width: 100%;
  height: 100%;
  max-width: 960px;

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: ${textColorWhite};
    width: 100%;
    margin-bottom: 42px;

    span {
      color: ${near3};
      font-weight: 700;
    }
  }
`

export const Wrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  padding: 0 30px 0 85px;

  @media (max-width: 1400px) {
    position: relative;
    height: 700px;
  }
`

export const BottomItems = styled.div`
  display: flex;
`

export const ChapterMonaco = styled.div``

export const MonacoContainer = styled.div`
  position: relative;
  height: 100%;

  .btnContainer {
    position: absolute;
    bottom: 30px;
    right: 40px;
    z-index: 999;
    width: 85%;

    @media (max-width: 1300px) {
      width: 93%;
    }
    @media (max-width: 998px) {
      position: static;
    }
  }

  .monaco-editor.rename-box {
    display: none;
  }

  .monaco-editor, .monaco-editor-background {
    background-color: #071C43;
  }
  .monaco-editor .margin{
    background-color: #071C43;
  }
`

export const ChapterItalic = styled.em`
  font-style: italic;
`

export const ChapterTab = styled.div<{ isSelected?: boolean }>`
  height: 30px;
  line-height: 20px;
  margin-right: 10px;
  padding: 5px 10px;
  display: inline-block;
  cursor: pointer;
  border-top: 1px solid ${primaryColor};
  border-right: 1px solid ${primaryColor};
  border-left: 1px solid ${primaryColor};
  background-color: ${(props) => (props.isSelected ? `${primaryColor}` : 'initial')};
`

export const ChapterLocked = styled.div`
  height: calc(100vh - 130px);
  margin: 70px 20px 0;
`

export const Difficulty = styled.div`
  margin: 15px 0px;
  text-align: center;
`
export const BackgroundContainer = styled.div`
  background: #DBEAFE;
  border-radius: 12px;
  padding: 32px 14px 42px;

  .exerciseTitle {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: ${subTextColor};
    &::before {
      content: '';
      width: 40px;
      height: 40px;
      background-image: url('/images/chapter/pointer.png');
      background-repeat: no-repeat;
      background-position: center center;
      padding-left: 50px;
    }
  }

  pre {
    border-radius: 5px;
    .hljs {
      margin-top: 18px;
      background: #091E44;
      border-radius: 5px;
      padding: 10px;
      font-family: 'DM Mono', monospace;
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 22px;
      color: ${textColorWhite};

      & .hljs-keyword {
        color: ${textColorBlue};
      }
    }
  }
`

export const ImageContainer = styled.span`
  display: block;
  margin-top: 40px;
  img {
    width: 100%;
  }
`

export const Spacer = styled.span`
  display: block;
  height: 30px;
`

export const narrativeText = styled.div`
  display: flex;
  align-items: center;
  height: 400px;
  font-weight: 400;
  font-size: 18px;
  color: #f2f2f2;
  overflow: hidden;

  img {
    display: none;
  }

  @media (min-width: 800px) {
    img {
      display: block;
    }
  }

  @media (max-width: 992px) {
    flex-direction: column;
  }

  .image-wrapper {
    display: flex;
    align-items: flex-end;
    width: 30%;
    min-width: 30%;
    margin: 0px 40px 0px 15px;

    @media (max-width: 992px) {
      width: 100%;
    }
  }
`

export const TextWrapper = styled.div`
  padding: 5%;
`

export const Quote = styled.div`
  color: #0072ce;
  font-size: 35px;
  font-weight: 900;
  padding-left: 40px;
`

export const quoteComma = styled.div`
  color: #0072ce;
  font-weight: 600;
  font-size: 88px;
  margin-bottom: -80px;
`

export const VerticalAlign = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;

  @media (max-width: 992px) {
    width: 100%;
  }
`

export const SpecialCode = styled.div`
  animation: flow 6s ease-in-out infinite;
  background: linear-gradient(-60deg, #fff, #00c08b, #0072ce, #000);
  background-size: 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 8px 40px;
  line-break: anywhere;

  @keyframes flow {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 0;
    }

    100% {
      background-position: 0 50%;
    }
  }
`
export const AnimatedCode = styled.span`
  animation: flow 10s ease-in-out infinite;
  background: linear-gradient(-60deg, #000, #00c08b, #0072ce, #000);
  background-size: 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;

  @keyframes flow {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 0;
    }

    100% {
      background-position: 0 50%;
    }
  }
`
