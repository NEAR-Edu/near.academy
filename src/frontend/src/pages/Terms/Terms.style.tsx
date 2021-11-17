import styled from 'styled-components/macro'

import { FullPage } from 'styles'

export const TermsStyled = styled.div`
  position: relative;
  background: white;

  > img {
    position: absolute;
    top: calc(33vh);
    left: 0;
    width: 100%;
    z-index: -1;
    opacity: 0.5;
  }
`

export const TermsPage = styled(FullPage)``

export const TermsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px 20px;
  > h1 {
    margin-bottom: 10px;
  }

  > h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  > ul {
    font-size: 20px;
    padding-left: 22px;
  }

  a {
    color: darkblue;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`
