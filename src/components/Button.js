import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

const Button = ({ text, disabled, handleClick }) => {
  return (
    <StyledButton disabled={disabled} onClick={handleClick}>
      {disabled ? 'Loading' : text}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.button};
  font-size: 13px;
  font-weight: bold;
  text-decoration: none;
  font-family:
    ${props => props.theme.fonts.primary},
    ${props => props.theme.fonts.fallback};
  padding: 16px 0px;
  line-height: 20px;
  display: inline-block;
  width: 100%;
  text-transform: uppercase;
  color: ${props => props.theme.colors.buttonText};
  transition: background-color 300ms ease;
  border-radius: 2px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
  outline: none;
  border: none;
  opacity: ${props => props.disabled ? 0.6 : 1};

  &:hover {
    ${props => !props.disabled && `
      background-color: ${darken(0.03, props.theme.colors.button)};
    `}
    cursor: pointer;
  }
`

export default Button
