import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

const ButtonLink = ({ text, href, handleClick }) => {
  return (
    <Link href={href} onClick={handleClick}>
      {text}
    </Link>
  )
}

const Link = styled.a`
  background-color: ${props => props.theme.colors.button};
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  font-family:
    ${props => props.theme.fonts.primary},
    ${props => props.theme.fonts.fallback};
  padding: 16px 0px;
  line-height: 20px;
  display: inline-block;
  width: 200px;
  /* text-transform: uppercase; */
  color: ${props => props.theme.colors.buttonText};
  transition: background-color 300ms ease;
  border-radius: 2px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: ${props => darken(0.03, props.theme.colors.button)};
  }

  ${props => props.theme.env === 'fp' && `
    padding-top: 20px;
  `}
`

export default ButtonLink
