import * as React from 'react'
import { ButtonsShowResultView } from './ButtonsShowResult.view'

type ButtonsShowResultProps = {
  validatorState: string
  validateCallback: () => void
  nextStep: () => void,
  backStep: () => void,
  isBack: boolean
}

export const ButtonsShowResult: any = ({
  validatorState,
  validateCallback,
  nextStep,
  backStep,
  isBack
}: ButtonsShowResultProps) => {
  return <ButtonsShowResultView
    validatorState={validatorState}
    validateCallback={validateCallback}
    nextStep={nextStep}
    backStep={backStep}
    isBack={isBack}
  />
}