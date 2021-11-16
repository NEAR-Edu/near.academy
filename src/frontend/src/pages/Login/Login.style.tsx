import styled from 'styled-components/macro'

import { near3, textColor, FadeInFromTop } from '../../styles'

export const LoginStyled = styled.div`

`

export const LoginCard = styled.div`
  max-width: 370px;
  margin: 44px auto 0;
  padding: 0 20px;

  .alreadyBox {
    margin-top: 22px;
    font-size: 15px;
    line-height: 22px;
    color: ${textColor};
    text-align: center;

    a {
      margin-left: 2px;
      color: ${near3};
    }
  }

  @media (max-width: 998px) {
    margin: 28px auto 0;
  }
`
export const Row = styled.div`
  margin-top: 20px;

  .forgot-password {
    margin-top: 16px;
    a {
      margin-left: 2px;
      color: ${near3};
    }
  }

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
  margin-bottom: 32px;

  @media (max-width: 1200px) {
    margin-top: 43px;
  }

  button {
    width: 185px;
    height: 62px;
  }
`

export const LoginTitle = styled(FadeInFromTop)`
  margin-top: 70px;
  font-size: 48px;
  line-height: 58px;
  font-weight: bold;
  text-align: center;
  color: white;

  h1 {
    margin: 0;
  }

  @media (max-width: 998px) {
    margin-top: 35px;
  }
`
