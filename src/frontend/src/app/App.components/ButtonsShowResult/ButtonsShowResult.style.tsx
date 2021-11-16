import styled from 'styled-components/macro'
import { textColorMenuItemNumber, textColorWhite } from 'styles'


export const ButtonsShowResult = styled.div`
  width: 100%;
  padding-bottom: 50px;

  .feedback {
    transform: translate(-50%, 0);
    position: absolute;
    bottom: 100px;
    left: 50%;
    z-index: 9999;

    @media (max-width: 1300px) {
      max-width: 560px;
    }

    @media (max-width: 998px) {
      display: none;
    }
  }
`

export const BtnsContainer = styled.div`

  &.isBack {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .rightBtns {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  

  button {
    padding: 15px 27px;
  }

  .nextBtn, .backBtn {
    margin-left: 47px;
    font-weight: 600;
    font-size: 17px;
    line-height: 25px;
    color: ${textColorMenuItemNumber};
    cursor: pointer;
  }
  .nextBtn {
    &.right {
      color: ${textColorWhite};
    }
  }

  .backBtn {
    margin-left: 0;
  }

  @media (min-width: 998px) {
    .nextStep {
      display: none;
    }
  }
  

  @media (max-width: 998px) {
    button {
      position: absolute;
      bottom: 60px;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
      max-width: 235px;
    }

    .nextBtn {
      position: absolute;
      bottom: 30px;
      right: 40px;
      z-index: 999;
    }
    .backBtn {
      position: absolute;
      bottom: 30px;
      left: 40px;
      z-index: 999;
    }
  }
`

export const ErrorMessage = styled.div`
  font-weight: 600;
  font-size: 21px;
  line-height: 31px;
  color: #FF0000;
  margin-bottom: 15px;
  position: absolute;
  bottom: 160px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  max-width: 235px;
`