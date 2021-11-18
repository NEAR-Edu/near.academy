import * as React from 'react'
import { ButtonsShowResultView } from './ButtonsShowResult.view'

type ButtonsShowResultProps = {
  validatorState: string
  validateCallback: () => void
  nextStep: () => void,
  backStep: () => void,
  isBack: boolean,
  isQuestions: boolean
}

export const ButtonsShowResult: any = ({
  validatorState,
  validateCallback,
  nextStep,
  backStep,
  isBack,
  isQuestions
}: ButtonsShowResultProps) => {
  return <ButtonsShowResultView
    validatorState={validatorState}
    validateCallback={validateCallback}
    nextStep={nextStep}
    backStep={backStep}
    isBack={isBack}
    isQuestions={isQuestions}
  />
}