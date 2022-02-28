import styled from "styled-components/macro";
import { backgroundColorChapter } from "styles";

export const Wrapp = styled.div`
  background-color: ${backgroundColorChapter};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MainContainer = styled.div`
  width: 100%;
  position: relative;
  padding-top: 130px;
`