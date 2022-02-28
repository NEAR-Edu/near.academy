import styled from 'styled-components/macro'
import { FullPage } from 'styles'

export const InviteStyled = styled.div`
  position: relative;
  background: white;
  padding-bottom: 30px;

  > img {
    width: 100%;
    position: static;
  }
`

export const InvitePage = styled(FullPage)`
    padding: 100px 0px 0px 0px;
    
    .get-started {
        width: max-content;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 50px auto;
    }
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #00C08B;
        padding: 50px 20px;
        
        p {
            color: #fff;
            font-size: 14px;
        }
        
        .input {
            width: 100%;
            margin-bottom: 20px;
            display: flex;    
            .copy-button {
                width: 20%;
                border: none;
                height: 40px;
                line-height: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #FEB261;
                color: #fff;
                font-size: 26px;
                font-weight: bold;
                &:hover {
                    cursor: pointer;
                }
            }
            input {
                width: 80%;
                height: 40px;
                padding: 0px 10px;
                border: none;
            }
        }
    }
    
    ul {
        display: flex;
        justify-content: space-between;
        padding: 50px 0px;
        
        @media (max-width: 992px) {
            flex-direction: column;
             padding: 20px 0px;
        }
        
        li {
            list-style: none;
            text-align: center;
            p, span {
                font-size: 40px;
                font-weight: 700;
                
                @media (max-width: 992px) {
                    font-size: 24px;
                }
            }
            span {
                color: #00C08B
            }
        }
    }
    `

export const InviteContainer = styled.div`
    width: 60%;
    margin: auto;
    
    @media (max-width: 1200px) {
        width: 100%;
    }
    
  > h1 {
    margin-bottom: 10px;
    width: 100%;
    text-align: center;
     @media (max-width: 992px) {
        font-size: 24px;
     }
  }
  
  p {
   @media (max-width: 992px) {
        word-break: break-all;
   }
  }

  > h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
     @media (max-width: 992px) {
        font-size: 24px;
     }
  }

  > ul {
    font-size: 20px;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`
