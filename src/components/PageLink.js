import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useTheme } from '../utils/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const PageLink = ({ text, path }) => {
  const { useBoldLinks } = useTheme('brand')

  return (
    <Button as={Link} to={path}>
      <Text useBoldLinks={useBoldLinks}>{text}</Text>
      <Arrow>
        <FontAwesomeIcon icon={faChevronRight} />
      </Arrow>
    </Button>
  )
}

const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-decoration: none;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;

  ${props => props.theme.env === 'fp' && `
    padding-top: 12px;
  `}
`

const Text = styled.p`
  width: 100%;
  color: ${props => props.theme.colors.secondary};
  text-transform: uppercase;
  font-weight: ${props => (props.useBoldLinks ? 'bold' : 'normal')};
  text-align: center;
`

const Arrow = styled.span`
  color: ${props => props.theme.colors.arrowSmall};
  position: absolute;
  right: 0;
  width: 50px;
`

export default PageLink
