import styled from 'styled-components/macro'

import { FadeInFromTop, near3, textColor } from '../../styles'

export const SignUpStyled = styled.div`

`

export const SignUpCard = styled.div`
  max-width: 370px;
  margin: 44px auto 0;
  padding: 0 20px;

  .alreadyBox {
    margin-top: 22px;
    font-size: 15px;
    line-height: 22px;
    color: ${textColor};
    text-align: center;
    padding-bottom: 30px;

    a {
      margin-left: 2px;
      color: ${near3};
    }
  }

  @media (max-width: 998px) {
    margin: 28px auto 0;
  }
`

export const SignUpTitle = styled(FadeInFromTop)`
  margin-top: 70px;
  font-size: 48px;
  line-height: 58px;
  font-weight: bold;
  text-align: center;
  color: white;

  h1 {
    margin: 0;
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
  margin-bottom: 32px;

  @media (max-width: 1200px) {
    margin-top: 43px;
  }

  button {
    width: 185px;
    height: 62px;
  }
`
