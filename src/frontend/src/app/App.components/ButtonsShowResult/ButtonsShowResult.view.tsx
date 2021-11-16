import * as React from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import classnames from 'classnames'

import { Button } from '../Button/Button.controller'
import { RIGHT, WRONG } from '../../../pages/Chapter/Chapter.constants'
import { BtnsContainer, ButtonsShowResult, ErrorMessage } from './ButtonsShowResult.style'

type ButtonsShowResultViewProps = {
  validatorState: string
  validateCallback: () => void
  nextStep: () => void,
  backStep: () => void,
  isBack: boolean
}

export const ButtonsShowResultView = ({
  validatorState,
  validateCallback,
  nextStep,
  backStep,
  isBack,
}: ButtonsShowResultViewProps) => {
  const matches = useMediaQuery('(max-width: 998px)')

  return (
    <ButtonsShowResult>
      <BtnsContainer className={isBack ? 'isBack' : ''}>
        {isBack ? (<div className={'backBtn'} onClick={backStep}>Back</div>) : null}
        <div className={'rightBtns'}>
          <div className={`${validatorState === RIGHT ? 'nextStep' : ''}`}>
            {validatorState === WRONG ? (
              <>
                {matches ? (
                  <>
                    <ErrorMessage>Exploration failed</ErrorMessage>
                    <Button text="Try again" color="blueGradient" onClick={() => validateCallback()} />
                  </>
                ) : (
                  <Button text="Try again" color="primary" onClick={() => validateCallback()} />
                )}
              </>
            ) : (
              <>
                {matches && validatorState === RIGHT ? (
                  <Button text="Success!" color="greenGradient" onClick={() => validateCallback()} />
                ) : (
                  <Button text="Submit answer" color="gradient" onClick={() => validateCallback()} />
                )}
              </>
            )}
          </div>
          <div className={classnames('nextBtn', validatorState === RIGHT && 'right')} onClick={nextStep}>Next</div>
        </div>
      </BtnsContainer>
      
      {validatorState === RIGHT ? (
        <div className={'feedback '}>
          <img src="/images/chapter/success.jpg" alt="" />
        </div>
      ) : validatorState === WRONG ? (
        <div className={'feedback '}>
          <img src="/images/chapter/fail.jpg" alt="" />
        </div> 
      ): null}
    </ButtonsShowResult>
  )
}