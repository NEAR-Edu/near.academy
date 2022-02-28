import styled from 'styled-components/macro'

import { FadeInFromTop, primaryColor } from '../../styles'

export const ResetPasswordStyled = styled.div``

export const ResetPasswordCard = styled.div`
  max-width: 370px;
  margin: 44px auto 0;
  padding: 0 20px;

  @media (max-width: 998px) {
    margin: 28px auto 0;
  }
`
export const ResetPasswordSeparator = styled.div`
  height: 10px;
`

export const Row = styled.div`
  margin-top: 20px;

  @media (max-width: 1200px) {
    margin-top: 19px;
  }
`

export const ResetPasswordTitle = styled(FadeInFromTop)`
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

export const ResetPasswordSignUp = styled.div`
  margin-top: 10px;
  text-align: center;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;

  > a {
    color: ${primaryColor} !important;
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
