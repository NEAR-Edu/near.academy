import styled from "styled-components/macro";
import { backgroundColorChapter } from "styles";

export const Wrapp = styled.div`
  display: grid;
  grid-template-columns: 722px 1fr;
  min-height: 100vh;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`
export const ImgContainer = styled.div`
  max-width: 100%;
  height: 100%;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`

export const CloseBtn = styled.div`
  position: absolute;
  top: 23px;
  right: 40px;
  width: 24px;
  height: 24px;
  background-image: url('/images/splash/closeBtn.png');
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  z-index: 99;
  
  @media (max-width: 1200px) {
    display: none;
  }
`
export const FormContainer = styled.div`
  width: 100%;
  background-color: ${backgroundColorChapter};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`