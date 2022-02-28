import styled from 'styled-components/macro'

import { backgroundColorBody, FullPage, near3, subTextColor, textColor, textColorBlue, textColorWhite } from 'styles'

export const HomeStyled = styled.div`
  position: relative;
  background: ${backgroundColorBody};
`

export const HomePage = styled(FullPage)``

export const HomeContainer = styled.div`
  section.main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 800px;
    margin-top: 70px;
    z-index: 1;
    padding: 0 20px;

    @media (max-width: 1470px) {
      height: 700px;
      margin-top: 40px;
    }

    @media (max-width: 1230px) {
      height: 600px;
    }

    @media (max-width: 1050px) {
      display: block;
      height: 100%;
    }

    @media (max-width: 600px) {
      padding: 0;
      margin-top: 10px;
    }
    

    .left {
      position: relative;
      height: 100%;
      width: 100%;
      margin-right: 30px;
      padding-top: 90px;
      background-image: url('/images/main_section/top_bg.png');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 693.77px 777.8px;

      @media (max-width: 1470px) {
        background-size: 525.71px 609.74px;
      }

      @media (max-width: 1230px) {
        background-size: 441.68px 525.71px;
      }

      @media (max-width: 1050px) {
        height: 609.74px;
        width: 525.71px;
        margin: 0 auto;
        background-size: 525.71px 609.74px;
      }

      @media (max-width: 600px) {
        width: 375px;
        height: 569px;
        background-image: url('/images/main_section/top_bg_mobile.png');
        background-position: center left;
        background-repeat: no-repeat;
        background-size: 375px 569px;
        margin: 0;
      }
    }

    .right {
      max-width: 762px;

      @media (max-width: 1050px) {
        padding: 0 20px 40px;
      }

      .title {
        .title_sub {
          font-weight: bold;
          font-size: 38px;
          color: ${subTextColor};
        }

        .title_bg {
          color: ${near3};
          font-weight: bold;
          font-size: 60px;
          line-height: 115.5%;
        }
      }

      .text {
        font-size: 21px;
        line-height: 32px;
        color: ${textColor};

        & + .text {
          margin-top: 20px;
          margin-bottom: 53px;
        }
      }

      .get-started { 
        display: flex;
        align-items: center;
        
        button {
          max-width: 220px;
          font-size: 22px;
          line-height: 33px;
          height: 60px;
          margin-right: 20px;
        }
      }

      @media (max-width: 1230px) {
        .title {
          .title_sub {
            font-weight: bold;
            font-size: 30px;
            color: ${subTextColor};
          }

          .title_bg {
            color: ${near3};
            font-weight: bold;
            font-size: 50px;
            line-height: 115.5%;
          }
        }

        .text {
          font-size: 18px;
          line-height: 32px;
          color: ${textColor};

          & + .text {
            margin-top: 20px;
            margin-bottom: 53px;
          }
        }
      }

      @media (max-width: 1050px) {
        margin: 0 auto;
        .get-started { 
          justify-content: center;
        }
      }

      @media (max-width: 600px) {
        .title {
          .title_sub {
            font-size: 33px;
            line-height: 45px;
          }
          .title_bg {
            font-size: 36px;
            line-height: 48px;
            color: ${textColorBlue};
          }
        }

        .text {
          font-size: 19px;
        }

        .get-started { 
          button {
            margin-right: 0;
          }
        }
      }
    }
  }

  .wrapp_card {
    margin-top: 76px;
    width: 100%;
    padding: 66px 20px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 25px 50px rgba(65, 41, 116, 0.1);
    border-radius: 15px;

    @media (max-width: 1470px) {
      border-radius: 0;
    }

    @media (max-width: 1230px) {
      margin-top: 36px;
      padding: 40px 20px;
    }

    .box-inner {
      .card_items {
        width: 100%;
        height: 100%;
        max-width: 1400px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        align-items: center;
        grid-column-gap: 30px;

        .card_item {

          @media (max-width: 968px) {
            max-width: 100%;
          }

          .card_title {
            font-weight: bold;
            font-size: 30px;
            line-height: 45px;
            color: ${subTextColor};
            max-width: 300px;
            width: 100%;
          }
        }

        .card_item-title {
          display: flex;
          align-items: center;

          .box-img {
            margin-right: 16px;
          }

          .title {
            font-weight: bold;
            font-size: 24px;
            line-height: 36px;
            color: ${subTextColor};
          }
        }

        .card_item-text {
          margin-top: 20px;
          font-size: 21px;
          line-height: 32px;
          color: ${textColor};
        }

        @media (max-width: 1230px) {
          grid-template-columns: repeat(3, 1fr);
          grid-row-gap: 20px;

          .item_1 {
            grid-column-start: 1;
            grid-column-end: 4;
            text-align: center;

            .card_title {
              max-width: 100%;
            }
          }
        }

        @media (max-width: 968px) {
          grid-template-columns: 1fr;

          .item_1 {
            grid-column-start: 1;
            grid-column-end: 1;
          }
        }
      }
    }
  }

  section.second {
    margin-top: 127px;
    background-image: url('/images/freeCourse/free_course_bg.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-color: ${subTextColor};
    border-radius: 25px;
    min-height: 1005px;
    position: relative;

    @media (max-width: 1470px) {
      border-radius: 0;
      background-size: cover;
      background-repeat: initial;
    }

    .img {
      position: absolute;

      &.img_top-left {
        top: 40px;
        left: 40px;

        @media (max-width: 1470px) {
          top: 100px;
          left: calc(50% - 141px);
        }

        @media (max-width: 968px) {
          top: 100px;
          left: calc(50% - 115px);

          img {
            width: 230px;
            height: 230px;
          }
        }
      }

      &.img_bottom-left {
        bottom: -7px;
        left: 0;

        img {
          border-bottom-left-radius: 25px;

          @media (max-width: 1470px) {
            border-radius: 0;
          }
        }
      }

      &.img_bottom-right {
        bottom: -7px;
        right: 0;

        @media (max-width: 1050px) {
          display: none;
        }

        img {
          border-bottom-right-radius: 25px;

          @media (max-width: 1470px) {
            border-radius: 0;
          }
        }
      }
    }

    .wrapp {
      max-width: 908px;
      width: 100%;
      margin: 0 auto;
      color: ${textColorWhite};

      @media (max-width: 968px) {
        padding: 0 20px;
      }

      .second-title {
        width: 100%;
        text-align: center;
        margin-top: 74px;
        margin-bottom: 50px;
        font-weight: 900;
        font-size: 48px;
        line-height: 58px;

        @media (max-width: 1470px) {
          margin-bottom: 250px;
        }

        @media (max-width: 968px) {
          font-size: 33px;
          margin-bottom: 220px;
          margin-top: 45px;
        }
      }

      .box-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 50px;
        border-bottom: 2px solid rgba(256, 256, 256, .3);

        @media (max-width: 968px) {
          flex-direction: column;
          padding-bottom: 34px;
        }
        

        .box-img {
          position: relative;
          .version {
            position: absolute;
            top: 0;
            right: -30px;
            font-weight: 500;
            font-size: 23px;
            line-height: 34px;
          }

          @media (max-width: 600px) {
            img {
              width: 308px;
              height: 103px;
            }

            .version {
              right: -25px;
              font-size: 18px;
            }
          }
        }

        .text {
          max-width: 500px;
          font-weight: 500;
          font-size: 22px;
          line-height: 33px;

          @media (max-width: 968px) {
            margin: 35px auto 0;
            max-width: 100%;
          }
        }
      }

      .box-bottom {
        margin-top: 43px;
        display: flex;
        justify-content: space-between;

        @media (max-width: 800px) {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 35px;
        }

        .description {
          font-family: 'DM Mono', monospace;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 133%;
          max-width: 620px;

          .paragraph + .paragraph {
            margin-top: 30px;
          }

          @media (max-width: 968px) {
            padding-right: 20px;
          }
        }

        .course-specs {
          max-width: 258px;
          width: 100%;
          background: rgba(255, 255, 255, 0.1);
          padding: 17px 18px 24px;
          border: 2px solid #C7D2FE;
          box-sizing: border-box;
          border-radius: 10px;
          max-height: 202px;

          .course-specs_title {
            font-weight: bold;
            font-size: 20px;
            line-height: 30px;
            margin: 12px;
          }

          .course-specs_options {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            .option_name {
              width: 100px;
              margin-right: 20px;
              font-weight: 600;
              font-size: 16px;
              line-height: 24px;
              color: #C7D2FE;
              opacity: 0.7;
            }
          }

          @media (max-width: 800px) {
            margin-top: 30px;
            max-width: 333px;

            .course-specs_title {
              text-align: center;
            }

            .course-specs_options {
              max-width: 190px;
              margin: 0 auto;
            }
          }
        }
      }
      .btnContainer {
        margin-top: 80px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 1470px) {
          padding-bottom: 100px;
        }
        .boxArrow {
          background-image: url('/images/freeCourse/arrow_right.png');
          background-repeat: no-repeat;
          background-position: center center;
          width: 62px;
          height: 40px;
          margin-right: 25px;

          @media (max-width: 800px) {
            transform: rotate(90deg);
            margin-right: 0;
          }
        }

        button {
          padding: 19px 34px;
          font-size: 21px;
          line-height: 31px;

          @media (max-width: 800px) {
            margin-top: 20px;
          }
        }

        @media (max-width: 800px) {
          margin-top: 40px;
          padding-bottom: 340px;
          flex-direction: column;

          button {
            width: 256px;
            height: 70px;
          }
        }
      }
    }
  }

  section.third {
    .wrapp {
      margin-top: 136px;
      padding: 0 20px 20px;

      @media (max-width: 968px) {
        margin-top: 70px;
        margin-bottom: 70px;
        padding-bottom: 0;
      }

      .third-title {
        display: block;
        font-weight: bold;
        font-size: 48px;
        line-height: 58px;
        text-align: center;
        color: ${subTextColor};

        @media (max-width: 1050px) {
          font-size: 40px;
          line-height: 45px;
        }
        @media (max-width: 968px) {
          font-size: 33px;
          line-height: 35px;
        }
      }

      .box-items {
        margin: 75px auto 114px;
        max-width: 1100px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        @media (max-width: 968px) {
          align-items: center;
          margin: 75px auto 0;
        }

        .item {
          max-width: 890px;
          display: flex;
          align-items: center;
          & + .item {
            margin-top: 84px;

            @media (max-width: 968px) {
              margin-top: 57px;
            }
          }

          &.middle {
            align-self: center;
          }

          @media (max-width: 968px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .item-img_fire {
            background-image: url('/images/learn_section/fire.png');
            background-repeat: no-repeat;
            background-position: center center;
            width: 238px;
            height: 238px;
          }
          .item-img_compass {
            background-image: url('/images/learn_section/compass.png');
            background-repeat: no-repeat;
            background-position: center center;
            width: 238px;
            height: 238px;
            
            img {
              width: 207px;
              height: 207px;
            }
          }
          .item-img_rocket {
            background-image: url('/images/learn_section/rocket.png');
            background-repeat: no-repeat;
            background-position: center center;
            width: 238px;
            height: 238px;
            
            img {
              width: 203px;
              height: 203px;
            }
          }

          .item-description {
            max-width: 628px;
            width: 100%;

            @media (max-width: 968px) {
              margin-top: 23px;
            }

            .item-title {
              font-weight: bold;
              font-size: 24px;
              line-height: 36px;
              color: ${subTextColor};
            }
            .item-text {
              font-size: 21px;
              line-height: 32px;
              color: ${textColor};

              @media (max-width: 968px) {
                margin-top: 23px;
              }

              @media (max-width: 600px) {
                font-size: 19px;
                line-height: 30px;
              }
            }
          }
        }
      }
    }
  }
`
