import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useRef } from 'react';
import { useHistory } from 'react-router-dom'

import { PopupBackdrop, PopupTitle, PopupText, PopupWrapper, BtnContainer, PopupContent, BtnContainerLater} from './Popup.style'
import {Button} from "../Button/Button.controller";
type PopupProps = {
  closePopup: () => void
  open: boolean
}

export const PopupView = ({open, closePopup }: PopupProps) => {
  const history = useHistory();
  const backdrop = useRef(null);

  if (!open) {
      return null;
  };

  const onClick = (e: any) => {
      if (backdrop.current === e.target) {
        closePopup();
      }
  }
  return (
    <PopupBackdrop onClick={onClick} ref={backdrop}>
      <PopupWrapper>
        <PopupContent>
          <PopupTitle>Create an account?</PopupTitle>
          <PopupText>It allows you to <span>save your progress</span> and <span>earn your certificate</span></PopupText>
          <BtnContainer>
              <Button text="Sign Up" color="gradient" onClick={() => history.push('/sign-up')} />
          </BtnContainer>
          <BtnContainerLater onClick={closePopup}>Later</BtnContainerLater>
        </PopupContent>
      </PopupWrapper>
  </PopupBackdrop>
  )
}

PopupView.propTypes = {
  closePopup: PropTypes.func,
  open: PropTypes.bool,
}
