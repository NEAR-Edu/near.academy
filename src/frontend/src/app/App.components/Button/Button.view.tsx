import * as PropTypes from 'prop-types'
import * as React from 'react'

import classnames from 'classnames'

import { BUTTON, ButtonColors, ButtonTypes, PRIMARY } from './Button.constants'
import { ButtonIcon, ButtonLoadingIcon, ButtonStyled, ButtonText } from './Button.style'

type ButtonViewProps = {
  text: string
  icon?: string
  color?: ButtonColors
  onClick?: () => void
  clickCallback: () => void
  clicked: boolean
  type?: ButtonTypes
  loading: boolean
  invertIcon: boolean
  isDisabled?: boolean
}

export const ButtonView = ({
  text,
  icon,
  color,
  onClick,
  clickCallback,
  clicked,
  type,
  loading,
  invertIcon,
  isDisabled
}: ButtonViewProps) => {
  let buttonClasses = color
  if (clicked) buttonClasses += ' clicked'
  if (loading) buttonClasses += ' loading'


  return (
    <ButtonStyled
      className={classnames(buttonClasses, isDisabled && 'disabled')}
      onClick={() => {
        clickCallback()
        onClick && onClick()
      }}
      type={type}
      disabled={isDisabled}
    >
      <ButtonText>
        {loading ? (
          <>
            Loading
            <ButtonLoadingIcon>
              <use xlinkHref="/icons/sprites.svg#circle" />
            </ButtonLoadingIcon>
          </>
        ) : (
          <>
            {icon && invertIcon && (
              <ButtonIcon className={color} invertIcon>
                <use xlinkHref={`/icons/sprites.svg#${icon}`} />
              </ButtonIcon>
            )}
            {text}
            {icon && !invertIcon && (
              <ButtonIcon className={color}>
                <use xlinkHref={`/icons/sprites.svg#${icon}`} />
              </ButtonIcon>
            )}
          </>
        )}
      </ButtonText>
    </ButtonStyled>
  )
}

ButtonView.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  clickCallback: PropTypes.func.isRequired,
  clicked: PropTypes.bool.isRequired,
  type: PropTypes.string,
  loading: PropTypes.bool,
  invertIcon: PropTypes.bool,
}

ButtonView.defaultProps = {
  icon: undefined,
  color: PRIMARY,
  type: BUTTON,
  loading: false,
  invertIcon: false,
}
