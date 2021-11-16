import styled from 'styled-components/macro'
import { textColorBlue, textColorWhite } from 'styles'

export const CheckboxesStyled = styled.div`
  label {
    display: block;
    padding: 0.5em;
    cursor: pointer;
    font-size: 17px;
    line-height: 20px;
    color: ${textColorWhite};

    > span:before {
      content: '';
      display: inline-block;
      vertical-align: -0.25em;
      height: 24px;
      width: 24px;
      border-radius: 10%;
      border: 1px solid ${textColorWhite};
      margin-right: 15px;
    }

    > input:checked + span:before {
      border-color: ${textColorBlue};
      background-image: url('/images/chapter/check.svg');
      background-repeat: no-repeat;
      background-position: center center;
      background-color: ${textColorBlue};
      background-size: 17px 13px;
    }

    > input:disabled + span {
      opacity: 0.5;
    }

    > input:disabled:checked + span:before {
      background-image: url('/images/chapter/check_disabled.svg');
      background-repeat: no-repeat;
      background-position: center center;
      background-color: #dadde3;
    }

    > input {
      display: none;
    }
  }
`
