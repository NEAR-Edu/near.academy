import styled from 'styled-components/macro'
import { subTextColor, textColor } from 'styles'

export const PopupBackdrop = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(8,29,66, 0.5);
  padding: 0 20px;
`

export const PopupWrapper = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 8px 16px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  position: relative;
  max-width: 768px;
  width: 100%;
`
export const PopupContent = styled.div`
  max-width: 652px;
  width: 100%;
  margin: 117px auto 0;
  padding: 0 20px;

  @media (max-width: 576px) {
    margin: 50px auto 0;
    max-width: 530px;
  }
`

export const PopupTitle = styled.h2`
  padding: 0;
  margin: 0;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  color: ${subTextColor};
  text-align: center;
  @media (max-width: 576px) {
    font-size: 33px;
    line-height: 40px;
  }
`

export const PopupText = styled.p`
  padding: 0;
  margin: 13px auto 0;
  font-size: 21px;
  line-height: 32px;
  text-align: center;
  color: ${textColor};

  span {
    font-weight: bold;
  }

  @media (max-width: 576px) {
    margin: 24px auto 0;
    font-size: 17px;
    line-height: 24px;

    span {
      font-weight: normal;
    }
  }
`
export const BtnContainer = styled.div`
  margin: 43px auto 0;
  max-width: 180px;
  width: 100%;
  button {
    height: 60px;
    width: 100%;
  }

  @media (max-width: 576px) {
    margin: 27px auto 0;
    max-width: 145px;
    button {
      height: 50px;
      width: 100%;
    }
  }
`
export const BtnContainerLater = styled.div`
  margin-top: 70px;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #94A3B8;
  cursor: pointer;
  margin-bottom: 32px;

  @media (max-width: 576px) {
    margin-top: 29px;
    margin-bottom: 41px;
  }
`