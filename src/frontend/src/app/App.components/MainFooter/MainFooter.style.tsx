import styled from "styled-components/macro";
import { near3, textColor } from "styles";

export const Footer = styled.footer`
  background-color: #0A172F;;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 32px;

  ul li {
    list-style: none;
  }

  .left-box {
    font-size: 16px;
    color: ${textColor};
    a {
      color: ${near3};
    }
  }

  .logo-footer {
    display: flex;
    align-items: center;

    .poweredBy {
      margin-right: 20px;
    }

    .logo {
      background-image: url('/images/main_footer/near_logo.png');
      background-repeat: no-repeat;
      background-position: center center;
      width: 94px;
      height: 25px;
    }
  }

  .footer-wrapper{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .nav-items-mobile {
      margin: 18px auto 30px;

      @media (min-width: 1200px) {
        display: none;
      }

      @media (max-width: 1200px) {
        display: flex;
        align-items: center;
        ul {
          display: flex;

          li + li {
            margin-left: 10px;
          }

          a {
            color: ${near3};
          }
        }
      }
    }

    .social-box {
      display: flex;
      align-items: center;

      .nav-items, .social-items {
        display: flex;
        align-items: center;
        ul {
          display: flex;

          li + li {
            margin-left: 10px;
          }

          a {
            color: ${near3};
          }
        }
      }

      .nav-items {
        margin-right: 33px;
        @media (max-width: 1200px) {
          display: none;
        }
        @media (min-width: 1200px) {
          display: flex;
        }
      }
    }

    @media (max-width: 1200px) {
      flex-direction: column;
      align-items: center;

      .left-box {
        margin-bottom: 30px;
      }

      .logo-footer {
        margin-bottom: 30px;
      }
    }
  }

  .mobileFooterWrapp {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .left-box {
      margin-bottom: 30px;
    }

    .logo-footer {
      margin-bottom: 30px;
    }

    .nav-items {
      display: none;
    }

    .nav-items-mobile {
      margin: 18px auto 30px;
      display: flex;
      align-items: center;
      ul {
        display: flex;

        li + li {
          margin-left: 10px;
        }

        a {
          color: ${near3};
        }
      }
    }
    .social-items {
      ul {
        display: flex;

        li + li {
          margin-left: 10px;
        }
      }
    }
  }
`
