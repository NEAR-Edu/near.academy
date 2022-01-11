import styled from 'styled-components/macro'
import { backgroundColorInput, backgroundColorLight, textColorBlack, textColorWhite } from 'styles'

export const Label = styled.div`
  font-weight: bold;
  font-size: 17px;
  line-height: 25px;
  color: ${textColorWhite};

  &.isName {
    color: ${textColorBlack};
  }

  &.disabled {
    color: rgba(255,255,255, .3);
  }

`
export const InputWrapp = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${backgroundColorInput};
  box-sizing: border-box;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  margin-top: 8px;
  border: 2px solid transparent;
  transition: all .2s;

  &:focus-within {
    border: 2px solid #4338CA;
  }

  &.isName {
    background-color: #E2E8F0;

    input {
      color: rgb(100, 116, 139);
    }
  }

  &.isAccountName {
    max-width: 270px;
    width: 100%;
  }

  &.success {
    background-color: ${backgroundColorLight};
    border: 2px solid #071C43;
    input {
      color: ${textColorBlack};
    }
    
    &:focus-within {
      border: 2px solid #4338CA;
    }
  }
  &.error {
    background-color: #FECDD3;
    border: 2px solid #DC2626;
    input {
      color: ${textColorBlack};
    }
    &:focus-within {
      border: 2px solid #DC2626;
    }
  }

  &.disabled {
    background-color: #13274C;
  }
`
export const IconBox = styled.div`
  display: none;
  position: absolute;
  right: 17px;
  top: calc(100% - 33px);
  width: 20px;
  height: 16px;
  background-repeat: no-repeat;
  background-position: center center;

  &.success {
    display: block;
    background-image: url('/images/form/success.png');
  }
  &.error {
    display: block;
    background-image: url('/images/form/error.png');
  }
`
export const Input = styled.input`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: normal;
  color: ${textColorWhite};
  font-size: 15px;
  line-height: 22px;
  width: 100%;
  height: 100%;
  display: block;
  background-color: inherit;
  border-radius: inherit;
  padding: 12px 17px 12px 10px;
  outline: none;
  border: none;
  font-size: 15px;
  line-height: 22px;
  max-width: 90%;
`
export const InvalidBox = styled.div`
  font-size: 13px;
  line-height: 18px;
  margin-top: 6px;
  color: #F87171;
  
  &:first-letter {
    text-transform: uppercase;
  }

  &.isAccountName {
    max-width: 270px;
    width: 100%;
  }
`
